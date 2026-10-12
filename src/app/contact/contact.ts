import { Component, computed, inject, signal } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { I18nService } from '../i18n/i18n.service';

/** Valores esperados del formulario de contacto. */
interface ContactFormValue {
  name: string;
  email: string;
  subject: string;
  message: string;
}

/**
 * Sección de contacto.
 *
 * Formulario template-driven (`FormsModule`) que, al enviarse,
 * construye un enlace `mailto:` con el motivo, nombre, correo
 * y mensaje traducidos. No almacena datos: solo abre la
 * aplicación de correo del usuario.
 *
 * La nota inferior es un `computed` que depende del estado
 * de envío y del idioma, por lo que siempre se muestra
 * en el idioma activo.
 */
@Component({
  selector: 'app-contact',
  imports: [FormsModule],
  templateUrl: './contact.html',
  styleUrl: './contact.scss',
})
export class Contact {
  /** Servicio de internacionalización, usado por el template. */
  protected readonly i18n = inject(I18nService);

  /** Indica si el usuario ya envió el formulario. */
  protected readonly sent = signal(false);

  /** Nota del formulario, reactiva al idioma y al envío. */
  protected readonly formNote = computed(() =>
    this.sent()
      ? this.i18n.t('contact.form.note.sent')
      : this.i18n.t('contact.form.note')
  );

  /** Opciones traducidas del selector de motivo. */
  protected readonly subjectOptions = computed(
    () => this.i18n.translations().subjectOptions
  );

  /**
   * Valida el formulario y redirige al cliente de correo
   * con los datos codificados en la URL `mailto:`.
   */
  protected onSubmit(form: NgForm): void {
    if (form.invalid) {
      return;
    }

    const { name, email, subject, message } =
      form.value as ContactFormValue;

    const mailSubject = encodeURIComponent(
      `${subject} — ${this.i18n.t('contact.form.mail.subject')}`
    );
    const mailBody = encodeURIComponent(
      `${this.i18n.t('contact.form.body.name')}: ${name}\n` +
        `${this.i18n.t('contact.form.body.email')}: ${email}\n\n` +
        `${message}`
    );

    this.sent.set(true);
    this.openMailto(
      `mailto:johansmoralesp@gmail.com?subject=${mailSubject}&body=${mailBody}`
    );
  }

  /**
   * Abre la aplicación de correo del usuario.
   *
   * Método separado para facilitar las pruebas
   * (permite interceptar la navegación).
   */
  protected openMailto(url: string): void {
    window.location.href = url;
  }
}
