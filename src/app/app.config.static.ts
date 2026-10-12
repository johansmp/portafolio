import { mergeApplicationConfig, ApplicationConfig } from '@angular/core';
import { provideServerRendering, withRoutes } from '@angular/ssr';
import { appConfig } from './app.config';
import { staticRoutes } from './app.routes.static';

/**
 * Configuración del servidor para el build estático.
 *
 * Espejo de `app.config.server.ts`, pero con rutas
 * en modo `Prerender`: el resultado es un sitio
 * estático (sin servidor) para hosting como
 * GitHub Pages.
 */
const staticServerConfig: ApplicationConfig = {
  providers: [provideServerRendering(withRoutes(staticRoutes))]
};

export const config = mergeApplicationConfig(appConfig, staticServerConfig);
