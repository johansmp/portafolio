import { RenderMode, ServerRoute } from '@angular/ssr';

/**
 * Rutas del build estático (GitHub Pages).
 *
 * `RenderMode.Prerender` genera el HTML en tiempo de
 * build, produciendo un sitio 100% estático servible
 * desde cualquier hosting de archivos. El idioma se
 * fija al del build (por defecto) y el `I18nService`
 * lo corrige al del visitante tras la primera
 * renderización (ver `i18n.service.ts`).
 */
export const staticRoutes: ServerRoute[] = [
  {
    path: '**',
    renderMode: RenderMode.Prerender
  }
];
