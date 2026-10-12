import { Component } from '@angular/core';
import { TestBed } from '@angular/core/testing';

import { RevealDirective } from './reveal.directive';

/** Host mínimo para probar la directiva aislada. */
@Component({
  imports: [RevealDirective],
  standalone: true,
  template: `<div appReveal id="probe">contenido</div>`,
})
class Host {}

/**
 * Pruebas de la directiva de revelado.
 *
 * jsdom no implementa `IntersectionObserver`, así que
 * la prueba cubre el camino de realce progresivo:
 * sin observer, el contenido permanece visible.
 */
describe('RevealDirective', () => {
  it('should be a no-op when IntersectionObserver is unavailable', () => {
    const fixture = TestBed.createComponent(Host);
    fixture.detectChanges();

    const probe = fixture.nativeElement.querySelector('#probe');

    // Sin `IntersectionObserver` no se agrega la
    // clase que oculta: el contenido se ve siempre.
    expect(probe.classList.contains('reveal')).toBe(false);
    expect(probe.textContent).toBe('contenido');
  });

  it('should not touch the document when the observer is unavailable', () => {
    const fixture = TestBed.createComponent(Host);
    fixture.detectChanges();

    // `js-anim` solo se activa con observer disponible.
    expect(document.documentElement.classList.contains('js-anim')).toBe(
      false
    );
  });
});
