import { Component, computed, inject } from '@angular/core';
import { I18nService } from '../i18n/i18n.service';
import type { ProjectItem } from '../i18n/i18n.types';

/**
 * Sección de proyectos destacados.
 *
 * Los proyectos (títulos, descripciones, chips y bloques
 * problema/solución/impacto) se traducen desde los
 * diccionarios; el arte CSS de cada tarjeta se elige con
 * `@switch` según el campo `art` del proyecto.
 */
@Component({
  selector: 'app-projects',
  templateUrl: './projects.html',
  styleUrl: './projects.scss',
})
export class Projects {
  /** Servicio de internacionalización, usado por el template. */
  protected readonly i18n = inject(I18nService);

  /** Proyectos traducidos (reactivos al idioma). */
  protected readonly projects = computed<readonly ProjectItem[]>(
    () => this.i18n.translations().projects
  );
}
