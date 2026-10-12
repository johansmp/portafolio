import {
  DOCUMENT,
  Inject,
  Injectable,
  Optional,
  PLATFORM_ID,
  REQUEST,
  afterNextRender,
  computed,
  inject,
  signal,
} from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { Meta, Title } from '@angular/platform-browser';

import { en } from './translations.en';
import { es } from './translations.es';
import type { Locale, StringKey, Translations } from './i18n.types';

/** Clave de `localStorage` que recuerda el idioma elegido. */
const LOCALE_STORAGE_KEY = 'portafolio-locale';

/** Idioma por defecto cuando no hay preferencia detectable. */
const DEFAULT_LOCALE: Locale = 'es';

/**
 * Servicio de internacionalización (i18n) del portafolio.
 *
 * Características:
 * - Estado reactivo con `signal`/`computed`: los templates
 *   se actualizan solos al cambiar de idioma.
 * - `t()` traduce claves de texto; `translations()` expone
 *   el diccionario completo (incluidas las listas de datos).
 * - Detección del idioma inicial: `localStorage`/`navigator`
 *   en el navegador y el header `Accept-Language` en el SSR.
 * - Compatible con hosting estático (GitHub Pages): respeta
 *   el idioma del HTML prerenderizado y corrige al idioma
 *   del visitante tras la primera renderización.
 * - Persiste la elección y sincroniza el `<title>`, la meta
 *   `description` y el atributo `lang` del `<html>`.
 */
@Injectable({ providedIn: 'root' })
export class I18nService {
  /** Idiomas disponibles, con etiqueta visible y código corto. */
  readonly availableLocales: readonly {
    code: Locale;
    label: string;
    short: string;
  }[] = [
    { code: 'es', label: 'Español', short: 'ES' },
    { code: 'en', label: 'English', short: 'EN' },
  ];

  /** Idioma activo (estado interno). */
  private readonly locale = signal<Locale>(DEFAULT_LOCALE);

  /** Idioma activo, expuesto solo para lectura. */
  readonly currentLocale = this.locale.asReadonly();

  /** Diccionario completo del idioma activo (reactivo). */
  readonly translations = computed<Translations>(() =>
    this.locale() === 'en' ? en : es
  );

  /** Enlace `mailto:` para solicitudes de CV (reactivo al idioma). */
  readonly cvMailto = computed(
    () =>
      `mailto:johansmoralesp@gmail.com?subject=${encodeURIComponent(
        this.t('nav.cv.subject')
      )}`
  );

  private readonly platformId = inject(PLATFORM_ID);
  private readonly title = inject(Title);
  private readonly meta = inject(Meta);
  /** Documento inyectable (funciona en navegador y en SSR). */
  private readonly document = inject(DOCUMENT);

  constructor(
    /** Petición HTTP actual; solo existe durante el SSR. */
    @Optional() @Inject(REQUEST) private readonly request?: Request
  ) {
    this.locale.set(this.detectInitialLocale());
    this.applyDocumentMetadata();
    this.setDocumentLang(this.locale());

    // En hosting estático el HTML viene prerenderizado
    // con el idioma por defecto del build. Tras la
    // primera renderización se corrige al idioma real
    // del visitante: la hidratación queda limpia (el
    // cliente pinta el mismo idioma del servidor) y
    // la vista acaba en el idioma correcto.
    if (isPlatformBrowser(this.platformId)) {
      afterNextRender(() => {
        // La preferencia guardada siempre gana.
        if (this.readStoredLocale()) {
          return;
        }
        const detected = this.normalizeLocale(navigator.language);
        if (detected !== this.locale()) {
          this.setLocale(detected);
        }
      });
    }
  }

  /**
   * Traduce una clave de texto.
   *
   * Segura para templates: al leer el signal del idioma,
   * la vista se re-evalúa automáticamente al cambiarlo.
   */
  t(key: StringKey): string {
    return this.translations()[key];
  }

  /** Cambia el idioma y persiste la elección en el navegador. */
  setLocale(locale: Locale): void {
    if (this.locale() === locale) {
      return;
    }

    this.locale.set(locale);

    if (isPlatformBrowser(this.platformId)) {
      try {
        localStorage.setItem(LOCALE_STORAGE_KEY, locale);
      } catch {
        // `localStorage` puede estar bloqueado (modo privado, etc.).
      }
    }

    this.setDocumentLang(locale);
    this.applyDocumentMetadata();
  }

  /**
   * Detecta el idioma inicial según el entorno:
   * - Preferencia guardada en el navegador.
   * - Servidor (SSR): header `Accept-Language` de
   *   la petición.
   * - HTML prerenderizado (build estático): el
   *   idioma del documento, para no desfasar la
   *   hidratación con el contenido ya pintado.
   * - Navegador sin prerender: idioma del navegador.
   */
  private detectInitialLocale(): Locale {
    // 1. El visitante ya eligió un idioma antes.
    if (isPlatformBrowser(this.platformId)) {
      const stored = this.readStoredLocale();
      if (stored) {
        return stored;
      }
    }

    // 2. SSR: el idioma lo elige el servidor con el
    //    header de la petición.
    const acceptLanguage = this.request?.headers.get('accept-language');
    if (acceptLanguage) {
      return this.normalizeLocale(acceptLanguage);
    }

    // 3. Contenido prerenderizado (build estático):
    //    se respeta el idioma ya pintado en el
    //    documento; la corrección ocurre tras la
    //    primera renderización.
    if (
      isPlatformBrowser(this.platformId) &&
      this.hasPrerenderedContent()
    ) {
      const documentLocale = this.document.documentElement.lang;
      if (documentLocale === 'es' || documentLocale === 'en') {
        return documentLocale;
      }
    }

    // 4. Navegador sin contenido prerenderizado:
    //    idioma del propio navegador.
    if (isPlatformBrowser(this.platformId)) {
      return this.normalizeLocale(navigator.language);
    }

    // 5. Servidor sin header: idioma por defecto.
    return DEFAULT_LOCALE;
  }

  /**
   * Indica si el `<app-root>` trae contenido
   * prerenderizado (build estático o SSR).
   */
  private hasPrerenderedContent(): boolean {
    const appRoot = this.document.querySelector('app-root');
    return (appRoot?.childElementCount ?? 0) > 0;
  }

  /** Lee el idioma persistido, si existe y es válido. */
  private readStoredLocale(): Locale | null {
    try {
      const stored = localStorage.getItem(LOCALE_STORAGE_KEY);
      return stored === 'es' || stored === 'en' ? stored : null;
    } catch {
      return null;
    }
  }

  /** Normaliza un código de idioma (p. ej. "en-US") a un `Locale`. */
  private normalizeLocale(raw: string): Locale {
    return raw.toLowerCase().startsWith('en') ? 'en' : 'es';
  }

  /** Actualiza el atributo `lang` del `<html>` (accesibilidad/SEO). */
  private setDocumentLang(locale: Locale): void {
    this.document.documentElement.lang = locale;
  }

  /** Sincroniza el título y la descripción del documento. */
  private applyDocumentMetadata(): void {
    const t = this.translations();
    this.title.setTitle(t['meta.title']);
    this.meta.updateTag({
      name: 'description',
      content: t['meta.description'],
    });
  }
}
