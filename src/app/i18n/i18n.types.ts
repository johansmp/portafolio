/**
 * Tipos compartidos del sistema de internacionalización (i18n).
 *
 * El diccionario español (`translations.es.ts`) define la forma
 * canónica de las traducciones; el diccionario inglés debe
 * satisfacer exactamente la misma estructura (`satisfies Translations`),
 * de modo que el compilador avisa si falta o sobra alguna clave.
 */

/** Idiomas soportados por el portafolio. */
export type Locale = 'es' | 'en';

/** Tipo de ilustración generada por CSS para cada proyecto. */
export type ProjectArt = 'phone' | 'code' | 'dashboard';

/** Elemento de la lista de competencias técnicas. */
export interface SkillItem {
  icon: string;
  title: string;
  description: string;
}

/** Entrada "problema / solución / impacto" de un proyecto. */
export interface ProjectFootItem {
  label: string;
  value: string;
}

/** Proyecto destacado del portafolio. */
export interface ProjectItem {
  title: string;
  tag: string;
  subtitle: string;
  copy: string;
  chips: string[];
  art: ProjectArt;
  foot: ProjectFootItem[];
}

/** Principio de trabajo. */
export interface PrincipleItem {
  icon: string;
  title: string;
  description: string;
}

/** Experiencia laboral. */
export interface JobItem {
  company: string;
  period: string;
  role: string;
  achievements: string[];
}

/** Capacidad de IA del panel "IA en acción". */
export interface AiItem {
  icon: string;
  title: string;
  description: string;
}

/**
 * Forma completa de un diccionario de traducciones.
 *
 * - Claves de cadena (`string`) para textos sueltos, traducibles
 *   desde los templates con `i18n.t('clave')`.
 * - Claves de datos (arreglos) para las listas renderizadas
 *   con `@for`, accesibles vía `i18n.translations()`.
 */
export interface Translations {
  /* Documento */
  'meta.title': string;
  'meta.description': string;

  /* Navegación */
  'nav.home': string;
  'nav.projects': string;
  'nav.experience': string;
  'nav.ai': string;
  'nav.about': string;
  'nav.contact': string;
  'nav.cv': string;
  'nav.cv.subject': string;

  /* Hero */
  'hero.eyebrow': string;
  'hero.intro': string;
  'hero.action.portfolio': string;
  'hero.action.contact': string;
  'hero.art.label': string;
  'hero.photo.alt': string;
  'hero.badge': string;
  'hero.note.a': string;
  'hero.note.b': string;
  'hero.note.c': string;

  /* Competencias */
  'skills.kicker': string;
  'skills.heading': string;
  'skills.desc': string;

  /* Proyectos */
  'projects.kicker': string;
  'projects.heading': string;
  'projects.desc': string;

  /* Principios */
  'principles.kicker': string;
  'principles.heading': string;

  /* Experiencia */
  'experience.kicker': string;
  'experience.heading': string;

  /* Panel de IA */
  'ai.title': string;
  'ai.subtitle': string;
  'ai.quote': string;
  'ai.quote.sub': string;

  /* Contacto */
  'contact.kicker': string;
  'contact.heading': string;
  'contact.desc': string;
  'contact.form.name': string;
  'contact.form.email': string;
  'contact.form.subject': string;
  'contact.form.message': string;
  'contact.form.submit': string;
  'contact.form.note': string;
  'contact.form.note.sent': string;
  'contact.form.mail.subject': string;
  'contact.form.body.name': string;
  'contact.form.body.email': string;
  'contact.quote': string;
  'contact.quote.author': string;

  /* Pie de página */
  'footer.tagline': string;
  'footer.rights': string;

  /* Accesibilidad */
  'a11y.nav': string;
  'a11y.open.menu': string;
  'a11y.close.menu': string;
  'a11y.language': string;

  /* Datos traducibles (listas) */
  skills: SkillItem[];
  projects: ProjectItem[];
  principles: PrincipleItem[];
  jobs: JobItem[];
  aiItems: AiItem[];
  subjectOptions: string[];
}

/**
 * Solo las claves cuyo valor es una cadena (excluye las listas),
 * usada por `I18nService.t()` para garantizar que devuelve `string`.
 */
export type StringKey = {
  [K in keyof Translations]: Translations[K] extends string ? K : never;
}[keyof Translations];
