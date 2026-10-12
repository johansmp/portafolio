import { Component, computed, inject } from '@angular/core';
import { I18nService } from '../i18n/i18n.service';
import type { AiItem, JobItem } from '../i18n/i18n.types';

/**
 * Sección de experiencia profesional.
 *
 * Combina la línea de tiempo laboral con el panel lateral
 * "IA en acción". Ambas listas y todos los textos provienen
 * de los diccionarios de traducción y son reactivos.
 */
@Component({
  selector: 'app-experience',
  templateUrl: './experience.html',
  styleUrl: './experience.scss',
})
export class Experience {
  /** Servicio de internacionalización, usado por el template. */
  protected readonly i18n = inject(I18nService);

  /** Experiencias laborales traducidas (reactivas al idioma). */
  protected readonly jobs = computed<readonly JobItem[]>(
    () => this.i18n.translations().jobs
  );

  /** Capacidades de IA traducidas (reactivas al idioma). */
  protected readonly aiItems = computed<readonly AiItem[]>(
    () => this.i18n.translations().aiItems
  );
}
