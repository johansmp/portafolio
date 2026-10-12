import { Component, computed, inject } from '@angular/core';
import { I18nService } from '../i18n/i18n.service';
import type { PrincipleItem } from '../i18n/i18n.types';

/**
 * Sección de filosofía de trabajo (principios).
 *
 * Los principios se traducen desde los diccionarios y se
 * re-evalúan automáticamente al cambiar de idioma.
 */
@Component({
  selector: 'app-principles',
  templateUrl: './principles.html',
  styleUrl: './principles.scss',
})
export class Principles {
  /** Servicio de internacionalización, usado por el template. */
  protected readonly i18n = inject(I18nService);

  /** Principios traducidos (reactivos al idioma). */
  protected readonly principles = computed<readonly PrincipleItem[]>(
    () => this.i18n.translations().principles
  );
}
