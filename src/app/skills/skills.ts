import { Component, computed, inject } from '@angular/core';
import { I18nService } from '../i18n/i18n.service';
import type { SkillItem } from '../i18n/i18n.types';

/**
 * Sección de competencias técnicas.
 *
 * La lista de habilidades vive en los diccionarios de
 * traducción; este `computed` la re-evalúa cuando cambia
 * el idioma, manteniendo la vista sincronizada.
 */
@Component({
  selector: 'app-skills',
  templateUrl: './skills.html',
  styleUrl: './skills.scss',
})
export class Skills {
  /** Servicio de internacionalización, usado por el template. */
  protected readonly i18n = inject(I18nService);

  /** Competencias traducidas (reactivas al idioma). */
  protected readonly skills = computed<readonly SkillItem[]>(
    () => this.i18n.translations().skills
  );
}
