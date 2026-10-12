import type { Translations } from './i18n.types';

/**
 * Diccionario en español (canónico).
 *
 * Define la estructura exacta que deben cumplir el resto de
 * diccionarios. Los nombres propios (empresas, persona, ciudad)
 * no se traducen.
 */
export const es = {
  /* Documento */
  'meta.title': 'Johan Morales Pinzón — Senior Software Engineer',
  'meta.description':
    'Portafolio de Johan Morales Pinzón, ingeniero de software senior. .NET, Angular y automatización inteligente con IA aplicada en producción; seis años construyendo soluciones escalables en Bogotá.',

  /* Navegación */
  'nav.home': 'Inicio',
  'nav.projects': 'Proyectos',
  'nav.experience': 'Experiencia',
  'nav.ai': 'IA',
  'nav.about': 'Sobre mí',
  'nav.contact': 'Contacto',
  'nav.cv': 'Descargar CV ↓',
  'nav.cv.subject': 'Solicitud de hoja de vida',

  /* Hero */
  'hero.eyebrow': 'Ingeniero de software senior　|　Arquitecto de soluciones',
  'hero.intro':
    'Convierto problemas complejos en software escalable, seguro y con impacto real. Seis años construyendo soluciones en .NET, Angular y automatización inteligente — con IA aplicada que ya trabaja en producción.',
  'hero.action.portfolio': 'Ver proyectos',
  'hero.action.contact': 'Solicitar CV',
  'hero.art.label': 'Fotografía profesional sobre arte abstracto tecnológico',
  'hero.photo.alt': 'Fotografía profesional de Johan Morales Pinzón',
  'hero.badge': 'Disponible para proyectos',
  'hero.note.a': 'Tecnología',
  'hero.note.b': 'Innovación',
  'hero.note.c': 'Impacto real',

  /* Competencias */
  'skills.kicker': 'Competencias',
  'skills.heading': 'Stack técnico y herramientas',
  'skills.desc':
    'Arquitectura, desarrollo fullstack e automatización: todo lo que uso para llevar una idea a producción con calidad.',

  /* Proyectos */
  'projects.kicker': 'Proyectos destacados',
  'projects.heading': 'Casos de éxito',
  'projects.desc':
    'Lo que construí, por qué y el impacto que generó — de proyectos en producción a experimentos técnicos.',

  /* Principios */
  'principles.kicker': 'Filosofía de trabajo',
  'principles.heading': 'Principios que me guían',

  /* Experiencia */
  'experience.kicker': 'Experiencia profesional',
  'experience.heading': 'Trayectoria',

  /* Panel de IA */
  'ai.title': 'IA en acción',
  'ai.subtitle': 'Soluciones inteligentes, resultados reales',
  'ai.quote': 'Integración con pipelines reales',
  'ai.quote.sub': 'Desde el dato hasta la experiencia del usuario.',

  /* Contacto */
  'contact.kicker': 'Hablemos',
  'contact.heading': 'Trabajemos juntos',
  'contact.desc':
    '¿Tienes un proyecto, una idea o una oportunidad en mente? Cuéntame y lo conversamos — respondo rápido.',
  'contact.form.name': 'Nombre completo',
  'contact.form.email': 'Correo electrónico',
  'contact.form.subject': 'Motivo de contacto',
  'contact.form.message': 'Cuéntame brevemente en qué puedo ayudarte...',
  'contact.form.submit': 'Preparar mensaje',
  'contact.form.note':
    'El formulario abrirá tu aplicación de correo; no almacena datos.',
  'contact.form.note.sent':
    'Se abrirá tu aplicación de correo para enviar el mensaje.',
  'contact.form.mail.subject': 'Portafolio web',
  'contact.form.body.name': 'Nombre',
  'contact.form.body.email': 'Correo',
  'contact.quote':
    'La tecnología no solo construye sistemas, construye oportunidades.',
  'contact.quote.author': '— Johan Morales',

  /* Pie de página */
  'footer.tagline': 'Senior Software Engineer · .NET · Angular · IA aplicada',
  'footer.rights': 'Todos los derechos reservados.',

  /* Accesibilidad */
  'a11y.nav': 'Navegación principal',
  'a11y.open.menu': 'Abrir menú',
  'a11y.close.menu': 'Cerrar menú',
  'a11y.language': 'Idioma',

  /* Datos: competencias */
  skills: [
    {
      icon: '⬡',
      title: 'Arquitectura de software',
      description:
        'Diseño de soluciones escalables, modulares y mantenibles.',
    },
    {
      icon: '</>',
      title: 'Fullstack development',
      description:
        '.NET, Angular, Java, PHP, JavaScript, PostgreSQL, SQL Server.',
    },
    {
      icon: '♧',
      title: 'IA aplicada',
      description:
        'STT, TTS, NLP, agentes conversacionales y procesamiento de documentos.',
    },
    {
      icon: '☁',
      title: 'Cloud & DevOps',
      description:
        'Azure, Azure DevOps, Blob Storage, CI/CD y despliegues.',
    },
    {
      icon: '▯',
      title: 'Flutter + Android',
      description:
        'Integración nativa y arquitectura híbrida para aplicaciones móviles.',
    },
    {
      icon: '⚙',
      title: 'Optimización y automatización',
      description: 'RPA, motores de reglas y procesos inteligentes.',
    },
  ],

  /* Datos: proyectos */
  projects: [
    {
      title: 'SentraVoz',
      tag: 'En proceso',
      subtitle: 'Screening de llamadas con IA',
      copy: 'Aplicación móvil con contestación automática, análisis de intención y agente de voz. Integra servicios de telefonía con una arquitectura híbrida Flutter + Android.',
      chips: ['Flutter', 'Android', '.NET', 'IA', 'Telephony'],
      art: 'phone',
      foot: [
        { label: 'Problema', value: 'Filtrado de llamadas no deseadas.' },
        {
          label: 'Solución',
          value: 'Agente de voz y análisis de intención.',
        },
        {
          label: 'Impacto',
          value: 'Mejor experiencia y reducción de interrupciones.',
        },
      ],
    },
    {
      title: 'JSMP',
      tag: 'Mar–May 2026',
      subtitle: 'Compresión semántica para JSON',
      copy: 'Modelo de formato orientado a reducir el tamaño y mejorar el acceso parcial a datos. Explora optimización de lectura y eficiencia en flujos de información.',
      chips: ['Python', 'JSON', 'Algoritmos', 'APIs'],
      art: 'code',
      foot: [
        { label: 'Problema', value: 'JSON con datos repetidos.' },
        {
          label: 'Solución',
          value: 'Formato semántico con acceso parcial.',
        },
        { label: 'Objetivo', value: 'Menor tamaño y mejor velocidad.' },
      ],
    },
    {
      title: 'SDIGO',
      tag: 'Oct–Dic 2025',
      subtitle: 'Gestión operativa inteligente',
      copy: 'Automatización del proceso de turnos y ausentismo mediante RPA, motor de reglas y dashboard en tiempo real. Integración de plataformas internas y reducción de reprocesos manuales.',
      chips: ['.NET', 'Angular', 'RPA', 'Azure', 'SQL Server'],
      art: 'dashboard',
      foot: [
        { label: 'Problema', value: 'Procesos manuales y reprocesos.' },
        { label: 'Solución', value: 'RPA, reglas y dashboard.' },
        {
          label: 'Impacto',
          value: 'Mayor precisión y eficiencia operativa.',
        },
      ],
    },
  ],

  /* Datos: principios */
  principles: [
    {
      icon: '◎',
      title: 'Diseño intencional',
      description:
        'Cada solución tiene un propósito claro y un impacto medible.',
    },
    {
      icon: '♢',
      title: 'Calidad como estándar',
      description: 'Código limpio, pruebas y buenas prácticas siempre.',
    },
    {
      icon: 'ϟ',
      title: 'Automatización inteligente',
      description: 'Menos tareas manuales, más valor.',
    },
    {
      icon: '☏',
      title: 'Comunicación clara',
      description: 'Equipos alineados, proyectos exitosos.',
    },
    {
      icon: '♧',
      title: 'Innovación aplicada',
      description: 'La tecnología debe resolver problemas reales.',
    },
  ],

  /* Datos: experiencia laboral */
  jobs: [
    {
      company: 'NEXA BPO',
      period: 'Jun. 2020 – Ene. 2026',
      role: 'Ingeniero de Desarrollo de Software Senior · Bogotá, Colombia',
      achievements: [
        'Análisis y levantamiento de requerimientos, arquitectura y automatización.',
        'Desarrollo y despliegue de Web APIs con .NET Core y Angular.',
        'Implementación de soluciones de IA (bots, voz, IDP e ICP).',
        'Administración de Azure, SQL Server y Blob Storage.',
        'Trabajo con metodologías ágiles Scrum y colaboración multidisciplinaria.',
      ],
    },
    {
      company: 'Zyos S.A.S',
      period: 'Mar. 2019 – Mar. 2020',
      role: 'Desarrollador Semi Senior · Bogotá, Colombia',
      achievements: [
        'Desarrollo y mantenimiento de aplicaciones Java con PostgreSQL.',
        'Optimización de procesos contables y cálculos de intereses.',
      ],
    },
    {
      company: 'Fundación Hematológica Colombia',
      period: 'Mar. 2019 – Mar. 2020',
      role: 'Asistente de Desarrollo · Bogotá, Colombia',
      achievements: [
        'Aplicaciones in-house con PHP, JavaScript, jQuery y PostgreSQL.',
        'Restauración y actualización de sistemas de información.',
        'Soporte a proveedores y gestión de requerimientos.',
      ],
    },
  ],

  /* Datos: capacidades de IA */
  aiItems: [
    {
      icon: '◖',
      title: 'STT / TTS',
      description: 'Conversión de voz a texto y viceversa.',
    },
    {
      icon: '✣',
      title: 'NLP',
      description:
        'Procesamiento de lenguaje natural y análisis de intención.',
    },
    {
      icon: '▣',
      title: 'Agentes autónomos',
      description: 'Toma de decisiones y ejecución de tareas.',
    },
    {
      icon: '⌘',
      title: 'Procesamiento documental',
      description:
        'Extracción y clasificación inteligente de información.',
    },
  ],

  /* Datos: opciones del selector de contacto */
  subjectOptions: [
    'Oportunidad laboral',
    'Proyecto / colaboración',
    'Consulta técnica',
    'Otro',
  ],
} satisfies Translations;
