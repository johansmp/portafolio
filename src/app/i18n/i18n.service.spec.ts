import { TestBed } from '@angular/core/testing';
import { Title } from '@angular/platform-browser';
import { vi } from 'vitest';

import { I18nService } from './i18n.service';
import { en } from './translations.en';
import { es } from './translations.es';

/**
 * Pruebas del servicio de internacionalización.
 *
 * Se simula el idioma del navegador (`navigator.language`)
 * y se limpia `localStorage` para que la detección del
 * idioma inicial sea determinista en cada caso.
 */
describe('I18nService', () => {
  let service: I18nService;

  /** Fija el idioma del navegador y reinicia el almacenamiento. */
  const mockBrowserLanguage = (language: string): void => {
    Object.defineProperty(navigator, 'language', {
      value: language,
      configurable: true,
    });
    localStorage.clear();
  };

  /**
   * Simula HTML prerenderizado: el documento
   * trae contenido dentro de `<app-root>` y su
   * propio atributo `lang` (como lo genera el
   * build estático o el SSR).
   */
  const mockPrerenderedDocument = (lang: string): void => {
    document.documentElement.lang = lang;
    const appRoot = document.createElement('app-root');
    appRoot.appendChild(document.createElement('section'));
    document.body.appendChild(appRoot);
  };

  /** Crea un servicio nuevo (reinicia el módulo de pruebas). */
  const createService = (): I18nService => {
    TestBed.resetTestingModule();
    TestBed.configureTestingModule({});
    return TestBed.inject(I18nService);
  };

  beforeEach(() => {
    mockBrowserLanguage('es-ES');
    service = createService();
  });

  afterEach(() => {
    document.querySelector('app-root')?.remove();
    vi.restoreAllMocks();
  });

  it('should default to Spanish when the browser is Spanish', () => {
    expect(service.currentLocale()).toBe('es');
  });

  it('should translate string keys in Spanish', () => {
    expect(service.t('nav.home')).toBe(es['nav.home']);
    expect(service.t('contact.heading')).toBe(es['contact.heading']);
  });

  it('should expose the Spanish data lists', () => {
    expect(service.translations().skills).toBe(es.skills);
    expect(service.translations().projects).toBe(es.projects);
    expect(service.translations().jobs).toBe(es.jobs);
    expect(service.translations().aiItems).toBe(es.aiItems);
    expect(service.translations().subjectOptions).toBe(
      es.subjectOptions
    );
  });

  it('should switch to English and translate every string key', () => {
    service.setLocale('en');

    expect(service.currentLocale()).toBe('en');

    for (const key of Object.keys(en) as (keyof typeof en)[]) {
      expect(service.t(key as never)).toBe(en[key]);
    }
  });

  it('should expose the English data lists after switching', () => {
    service.setLocale('en');

    expect(service.translations().skills).toBe(en.skills);
    expect(service.translations().principles).toBe(en.principles);
  });

  it('should switch back to Spanish', () => {
    service.setLocale('en');
    service.setLocale('es');

    expect(service.currentLocale()).toBe('es');
    expect(service.t('nav.home')).toBe(es['nav.home']);
  });

  it('should persist the locale in localStorage', () => {
    service.setLocale('en');

    expect(localStorage.getItem('portafolio-locale')).toBe('en');
  });

  it('should restore the persisted locale on the next session', () => {
    localStorage.setItem('portafolio-locale', 'en');
    const restored = createService();

    expect(restored.currentLocale()).toBe('en');
  });

  it('should detect English from the browser language', () => {
    mockBrowserLanguage('en-US');
    const detected = createService();

    expect(detected.currentLocale()).toBe('en');
  });

  it('should match the prerendered document language to avoid hydration mismatch', () => {
    mockBrowserLanguage('es-ES');
    mockPrerenderedDocument('en');
    const detected = createService();

    expect(detected.currentLocale()).toBe('en');
  });

  it('should keep Spanish when the prerendered document is Spanish', () => {
    mockBrowserLanguage('en-US');
    mockPrerenderedDocument('es');
    const detected = createService();

    expect(detected.currentLocale()).toBe('es');
  });

  it('should prefer the persisted locale over prerendered content', () => {
    mockBrowserLanguage('es-ES');
    mockPrerenderedDocument('en');
    localStorage.setItem('portafolio-locale', 'es');
    const detected = createService();

    expect(detected.currentLocale()).toBe('es');
  });

  it('should fall back to the browser language without prerendered content', () => {
    mockBrowserLanguage('en-US');
    document.documentElement.lang = 'es';
    const detected = createService();

    expect(detected.currentLocale()).toBe('en');
  });

  it('should list the available locales', () => {
    expect(
      service.availableLocales.map((locale) => locale.code)
    ).toEqual(['es', 'en']);
  });

  it('should update the document title with the locale', () => {
    service.setLocale('en');

    expect(TestBed.inject(Title).getTitle()).toBe(en['meta.title']);
  });

  it('should update the html lang attribute with the locale', () => {
    service.setLocale('en');

    expect(document.documentElement.lang).toBe('en');
  });

  it('should build the CV mailto with the translated subject', () => {
    service.setLocale('en');

    expect(service.cvMailto()).toBe(
      `mailto:johansmoralesp@gmail.com?subject=${encodeURIComponent(
        en['nav.cv.subject']
      )}`
    );
  });

  it('should not change anything when setting the same locale', () => {
    const locale = service.currentLocale();
    service.setLocale(locale);

    expect(service.currentLocale()).toBe(locale);
  });
});
