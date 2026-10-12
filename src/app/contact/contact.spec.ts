import { TestBed } from '@angular/core/testing';
import { FormsModule, NgForm } from '@angular/forms';
import { vi } from 'vitest';

import { Contact } from './contact';
import { en } from '../i18n/translations.en';

/**
 * Double de prueba: expone como públicos los miembros
 * protegidos del componente para poder invocarlos
 * e interceptarlos desde las pruebas.
 */
interface ContactTestDouble {
  onSubmit: (form: NgForm) => void;
  openMailto: (url: string) => void;
  sent: () => boolean;
  formNote: () => string;
  subjectOptions: () => string[];
}

/** Valores esperados del formulario de contacto. */
interface ContactFormValue {
  name: string;
  email: string;
  subject: string;
  message: string;
}

/**
 * Pruebas del formulario de contacto.
 *
 * Se simula un formulario válido/inválido y se intercepta
 * la navegación (`openMailto`) para verificar la URL
 * `mailto:` generada sin abrir realmente el cliente.
 */
describe('Contact', () => {
  /** Fija el idioma del navegador en inglés para expectativas deterministas. */
  const mockBrowserLanguage = (language: string): void => {
    Object.defineProperty(navigator, 'language', {
      value: language,
      configurable: true,
    });
    localStorage.clear();
  };

  /** Formulario falso con la validez y los valores deseados. */
  const fakeForm = (
    invalid: boolean,
    value: Partial<ContactFormValue>
  ): NgForm => ({ invalid, value }) as unknown as NgForm;

  /** Valores de ejemplo reutilizados en las pruebas. */
  const validValues: ContactFormValue = {
    name: 'Ana Pérez',
    email: 'ana@example.com',
    subject: 'Job opportunity',
    message: 'Hello',
  };

  /** Crea el componente y lo expone como double de prueba. */
  const createComponent = (): {
    component: ContactTestDouble;
    destroy: () => void;
  } => {
    const fixture = TestBed.createComponent(Contact);
    return {
      component: fixture.componentInstance as unknown as ContactTestDouble,
      destroy: () => fixture.destroy(),
    };
  };

  beforeEach(() => {
    mockBrowserLanguage('en-US');
    TestBed.configureTestingModule({ imports: [Contact] });
  });

  it('should navigate to a mailto with the translated subject on valid submit', () => {
    const { component } = createComponent();
    const openMailto = vi.spyOn(component, 'openMailto');

    component.onSubmit(fakeForm(false, validValues));

    const expectedSubject = encodeURIComponent(
      `Job opportunity — ${en['contact.form.mail.subject']}`
    );
    const expectedBody = encodeURIComponent(
      `${en['contact.form.body.name']}: ${validValues.name}\n` +
        `${en['contact.form.body.email']}: ${validValues.email}\n\n` +
        `${validValues.message}`
    );

    expect(openMailto).toHaveBeenCalledTimes(1);
    expect(openMailto).toHaveBeenCalledWith(
      `mailto:johansmoralesp@gmail.com?subject=${expectedSubject}&body=${expectedBody}`
    );
  });

  it('should mark the form as sent and update the note', () => {
    const { component } = createComponent();
    vi.spyOn(component, 'openMailto');

    component.onSubmit(fakeForm(false, validValues));

    expect(component.sent()).toBe(true);
    expect(component.formNote()).toBe(en['contact.form.note.sent']);
  });

  it('should not send when the form is invalid', () => {
    const { component } = createComponent();
    const openMailto = vi.spyOn(component, 'openMailto');

    component.onSubmit(fakeForm(true, {}));

    expect(openMailto).not.toHaveBeenCalled();
    expect(component.sent()).toBe(false);
    expect(component.formNote()).toBe(en['contact.form.note']);
  });

  it('should expose the translated subject options', () => {
    const { component } = createComponent();

    expect(component.subjectOptions()).toEqual(en.subjectOptions);
  });
});
