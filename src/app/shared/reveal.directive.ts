import { Directive, ElementRef, inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

/** Marca de clase CSS que activa las animaciones (solo con JS). */
const ANIMATIONS_CLASS = 'js-anim';

/** Evita que varias directivas activen las animaciones más de una vez. */
let animationsArmed = false;

/**
 * Activa el modo animado del sitio: agrega `js-anim` al
 * `<html>`, de modo que el CSS puede ocultar y revelar
 * elementos con seguridad (sin JS, todo se ve visible).
 */
function armAnimations(): void {
  if (animationsArmed) {
    return;
  }
  animationsArmed = true;
  document.documentElement.classList.add(ANIMATIONS_CLASS);
}

/**
 * Revelado al hacer scroll.
 *
 * El elemento empieza oculto y se desliza hacia su lugar
 * la primera vez que entra en el viewport. En el servidor
 * (prerender) no se aplica ningún estilo: el contenido
 * siempre es visible, aunque el JS esté desactivado.
 *
 * Uso: `<app-skills appReveal />`.
 */
@Directive({
  selector: '[appReveal]',
  standalone: true,
})
export class RevealDirective {
  private readonly element = inject(ElementRef<HTMLElement>).nativeElement;
  private readonly platformId = inject(PLATFORM_ID);
  /**
   * Referencia viva al observer: si se libera,
   * el observer deja de observar (comportamiento
   * del estándar). Vive mientras viva el elemento.
   */
  private observer?: IntersectionObserver;

  constructor() {
    if (
      !isPlatformBrowser(this.platformId) ||
      typeof IntersectionObserver === 'undefined'
    ) {
      // Sin navegador o sin `IntersectionObserver`
      // (jsdom, navegadores antiguos): el contenido
      // permanece visible. Realce progresivo puro.
      return;
    }

    armAnimations();
    this.element.classList.add('reveal');

    this.observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            this.element.classList.add('is-in');
            this.observer?.unobserve(this.element);
          }
        }
      },
      { threshold: 0.12, rootMargin: '0px 0px -8% 0px' }
    );
    this.observer.observe(this.element);
  }
}
