import { Component, inject } from '@angular/core';
import { I18nService } from '../i18n/i18n.service';

/**
 * Sección hero: presentación, acciones y datos de contacto.
 *
 * Los textos provienen de `I18nService.t()`; el nombre y
 * los datos de contacto (teléfono, correo, ciudad) son
 * datos propios y no se traducen.
 */
@Component({
  selector: 'app-hero',
  templateUrl: './hero.html',
  styleUrl: './hero.scss',
})
export class Hero {
  /** Servicio de internacionalización, usado por el template. */
  protected readonly i18n = inject(I18nService);
}
