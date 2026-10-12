import { RenderMode, ServerRoute } from '@angular/ssr';

/**
 * Rutas del servidor SSR.
 *
 * `RenderMode.Server` renderiza cada petición en el
 * servidor (en lugar de servir HTML prerenderizado),
 * lo que permite al `I18nService` leer el header
 * `Accept-Language` de la petición (`REQUEST`) y
 * devolver la landing en el idioma del visitante.
 */
export const serverRoutes: ServerRoute[] = [
  {
    path: '**',
    renderMode: RenderMode.Server
  }
];
