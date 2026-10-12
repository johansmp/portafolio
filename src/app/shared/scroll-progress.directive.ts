import {
  Directive,
  ElementRef,
  HostListener,
  inject,
  PLATFORM_ID,
} from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

/**
 * Barra de progreso de lectura.
 *
 * Escala horizontalmente (`scaleX`) según la posición
 * del scroll de la página, dando una pista visual del
 * avance por la landing. Solo funciona en el navegador.
 *
 * Uso: `<div class="scroll-progress" appScrollProgress></div>`.
 */
@Directive({
  selector: '[appScrollProgress]',
  standalone: true,
})
export class ScrollProgressDirective {
  private readonly element = inject(ElementRef<HTMLElement>).nativeElement;
  private readonly platformId = inject(PLATFORM_ID);

  @HostListener('window:scroll', [])
  onScroll(): void {
    if (!isPlatformBrowser(this.platformId)) {
      return;
    }
    const scrollable =
      document.documentElement.scrollHeight - window.innerHeight;
    const progress = scrollable > 0 ? window.scrollY / scrollable : 0;
    this.element.style.transform = `scaleX(${progress})`;
  }
}
