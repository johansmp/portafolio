import { Component } from '@angular/core';
import { TestBed } from '@angular/core/testing';

import { ScrollProgressDirective } from './scroll-progress.directive';

/** Host mínimo para probar la directiva aislada. */
@Component({
  imports: [ScrollProgressDirective],
  standalone: true,
  template: `<div class="scroll-progress" appScrollProgress id="probe"></div>`,
})
class Host {}

/**
 * Pruebas de la barra de progreso de lectura.
 *
 * En jsdom el scroll es 0, así que la barra debe
 * quedar en `scaleX(0)` tras un evento de scroll.
 */
describe('ScrollProgressDirective', () => {
  it('should render the progress bar element', () => {
    const fixture = TestBed.createComponent(Host);
    fixture.detectChanges();

    expect(fixture.nativeElement.querySelector('#probe')).toBeTruthy();
  });

  it('should stay at scaleX(0) when there is nothing to scroll', () => {
    const fixture = TestBed.createComponent(Host);
    fixture.detectChanges();

    window.dispatchEvent(new Event('scroll'));

    const probe = fixture.nativeElement.querySelector('#probe');
    expect(probe.style.transform).toBe('scaleX(0)');
  });
});
