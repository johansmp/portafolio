import { Component, inject, signal } from '@angular/core';
import { I18nService } from '../i18n/i18n.service';
import type { Locale } from '../i18n/i18n.types';

/**
 * Barra de navegación superior.
 *
 * Incluye el conmutador de idioma (ES/EN), que delega
 * en `I18nService.setLocale()`; toda la vista reacciona
 * al cambio de forma automática gracias a los signals.
 */
@Component({
  selector: 'app-header',
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {
  /** Servicio de internacionalización, usado por el template. */
  protected readonly i18n = inject(I18nService);

  /** Estado del menú móvil (abierto/cerrado). */
  protected readonly menuOpen = signal(false);

  /** Alterna el menú móvil. */
  protected toggleMenu(): void {
    this.menuOpen.update((open) => !open);
  }

  /** Cierra el menú móvil (se usa al tocar un enlace). */
  protected closeMenu(): void {
    this.menuOpen.set(false);
  }

  /** Cambia el idioma de toda la aplicación. */
  protected setLocale(locale: Locale): void {
    this.i18n.setLocale(locale);
  }
}
