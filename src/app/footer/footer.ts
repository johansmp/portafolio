import { Component, inject } from '@angular/core';
import { I18nService } from '../i18n/i18n.service';

/**
 * Pie de página: marca, enlaces a redes y derechos de autor.
 *
 * El año se calcula dinámicamente y el lema se traduce
 * desde el diccionario activo.
 */
@Component({
  selector: 'app-footer',
  templateUrl: './footer.html',
  styleUrl: './footer.scss',
})
export class Footer {
  /** Servicio de internacionalización, usado por el template. */
  protected readonly i18n = inject(I18nService);

  /** Año actual para el copyright. */
  protected readonly year = new Date().getFullYear();
}
