import type { Translations } from './i18n.types';

/**
 * Diccionario en inglés.
 *
 * Debe contener exactamente las mismas claves que el
 * diccionario español; `satisfies Translations` lo verifica
 * en tiempo de compilación.
 */
export const en = {
  /* Documento */
  'meta.title': 'Johan Morales Pinzón — Senior Software Engineer',
  'meta.description':
    'Portfolio of Johan Morales Pinzón, senior software engineer. .NET, Angular and intelligent automation with applied AI in production; six years building scalable solutions in Bogotá.',

  /* Navegación */
  'nav.home': 'Home',
  'nav.projects': 'Projects',
  'nav.experience': 'Experience',
  'nav.ai': 'AI',
  'nav.about': 'About me',
  'nav.contact': 'Contact',
  'nav.cv': 'Download CV ↓',
  'nav.cv.subject': 'CV request',

  /* Hero */
  'hero.eyebrow': 'Senior Software Engineer　|　Solutions Architect',
  'hero.intro':
    'I turn complex problems into scalable, secure software with real impact. Six years building solutions in .NET, Angular and intelligent automation — with applied AI already working in production.',
  'hero.action.portfolio': 'View projects',
  'hero.action.contact': 'Request CV',
  'hero.art.label': 'Professional photo over abstract technology art',
  'hero.photo.alt': 'Professional portrait of Johan Morales Pinzón',
  'hero.badge': 'Open to projects',
  'hero.note.a': 'Technology',
  'hero.note.b': 'Innovation',
  'hero.note.c': 'Real impact',

  /* Competencias */
  'skills.kicker': 'Skills',
  'skills.heading': 'Tech stack & tools',
  'skills.desc':
    'Architecture, fullstack development and automation: everything I use to take an idea to production with quality.',

  /* Proyectos */
  'projects.kicker': 'Featured projects',
  'projects.heading': 'Success stories',
  'projects.desc':
    'What I built, why, and the impact it delivered — from production projects to technical experiments.',

  /* Principios */
  'principles.kicker': 'Work philosophy',
  'principles.heading': 'Principles that guide me',

  /* Experiencia */
  'experience.kicker': 'Professional experience',
  'experience.heading': 'Career path',

  /* Panel de IA */
  'ai.title': 'AI in action',
  'ai.subtitle': 'Smart solutions, real results',
  'ai.quote': 'Integration with real pipelines',
  'ai.quote.sub': 'From data to the user experience.',

  /* Contacto */
  'contact.kicker': "Let's talk",
  'contact.heading': "Let's work together",
  'contact.desc':
    'Have a project, an idea, or an opportunity in mind? Tell me about it — I reply fast.',
  'contact.form.name': 'Full name',
  'contact.form.email': 'Email address',
  'contact.form.subject': 'Reason for contact',
  'contact.form.message': 'Briefly tell me how I can help you...',
  'contact.form.submit': 'Prepare message',
  'contact.form.note':
    'The form will open your email app; it does not store data.',
  'contact.form.note.sent':
    'Your email app will open to send the message.',
  'contact.form.mail.subject': 'Web portfolio',
  'contact.form.body.name': 'Name',
  'contact.form.body.email': 'Email',
  'contact.quote':
    "Technology doesn't just build systems, it builds opportunities.",
  'contact.quote.author': '— Johan Morales',

  /* Pie de página */
  'footer.tagline': 'Senior Software Engineer · .NET · Angular · Applied AI',
  'footer.rights': 'All rights reserved.',

  /* Accesibilidad */
  'a11y.nav': 'Main navigation',
  'a11y.open.menu': 'Open menu',
  'a11y.close.menu': 'Close menu',
  'a11y.language': 'Language',

  /* Datos: competencias */
  skills: [
    {
      icon: '⬡',
      title: 'Software architecture',
      description:
        'Scalable, modular and maintainable solution design.',
    },
    {
      icon: '</>',
      title: 'Fullstack development',
      description:
        '.NET, Angular, Java, PHP, JavaScript, PostgreSQL, SQL Server.',
    },
    {
      icon: '♧',
      title: 'Applied AI',
      description:
        'STT, TTS, NLP, conversational agents and document processing.',
    },
    {
      icon: '☁',
      title: 'Cloud & DevOps',
      description:
        'Azure, Azure DevOps, Blob Storage, CI/CD and deployments.',
    },
    {
      icon: '▯',
      title: 'Flutter + Android',
      description:
        'Native integration and hybrid architecture for mobile applications.',
    },
    {
      icon: '⚙',
      title: 'Optimization & automation',
      description: 'RPA, rules engines and intelligent processes.',
    },
  ],

  /* Datos: proyectos */
  projects: [
    {
      title: 'SentraVoz',
      tag: 'In progress',
      subtitle: 'AI call screening',
      copy: 'Mobile app with automatic answering, intent analysis and voice agent. Integrates telephony services with a hybrid Flutter + Android architecture.',
      chips: ['Flutter', 'Android', '.NET', 'AI', 'Telephony'],
      art: 'phone',
      foot: [
        { label: 'Problem', value: 'Unwanted call filtering.' },
        {
          label: 'Solution',
          value: 'Voice agent and intent analysis.',
        },
        {
          label: 'Impact',
          value: 'Better experience and fewer interruptions.',
        },
      ],
    },
    {
      title: 'JSMP',
      tag: 'Mar–May 2026',
      subtitle: 'Semantic compression for JSON',
      copy: 'Format model aimed at reducing size and improving partial data access. Explores read optimization and efficiency in information flows.',
      chips: ['Python', 'JSON', 'Algorithms', 'APIs'],
      art: 'code',
      foot: [
        { label: 'Problem', value: 'JSON with repeated data.' },
        {
          label: 'Solution',
          value: 'Semantic format with partial access.',
        },
        { label: 'Goal', value: 'Smaller size and better speed.' },
      ],
    },
    {
      title: 'SDIGO',
      tag: 'Oct–Dec 2025',
      subtitle: 'Smart operations management',
      copy: 'Automation of shift and absence processes through RPA, rules engine and real-time dashboard. Integration of internal platforms and reduction of manual rework.',
      chips: ['.NET', 'Angular', 'RPA', 'Azure', 'SQL Server'],
      art: 'dashboard',
      foot: [
        { label: 'Problem', value: 'Manual processes and rework.' },
        { label: 'Solution', value: 'RPA, rules and dashboard.' },
        {
          label: 'Impact',
          value: 'Greater accuracy and operational efficiency.',
        },
      ],
    },
  ],

  /* Datos: principios */
  principles: [
    {
      icon: '◎',
      title: 'Intentional design',
      description:
        'Every solution has a clear purpose and measurable impact.',
    },
    {
      icon: '♢',
      title: 'Quality as standard',
      description: 'Clean code, tests and best practices, always.',
    },
    {
      icon: 'ϟ',
      title: 'Intelligent automation',
      description: 'Fewer manual tasks, more value.',
    },
    {
      icon: '☏',
      title: 'Clear communication',
      description: 'Aligned teams, successful projects.',
    },
    {
      icon: '♧',
      title: 'Applied innovation',
      description: 'Technology must solve real problems.',
    },
  ],

  /* Datos: experiencia laboral */
  jobs: [
    {
      company: 'NEXA BPO',
      period: 'Jun. 2020 – Jan. 2026',
      role: 'Senior Software Development Engineer · Bogotá, Colombia',
      achievements: [
        'Requirements analysis and gathering, architecture and automation.',
        'Development and deployment of Web APIs with .NET Core and Angular.',
        'Implementation of AI solutions (bots, voice, IDP and ICP).',
        'Administration of Azure, SQL Server and Blob Storage.',
        'Agile Scrum methodologies and multidisciplinary collaboration.',
      ],
    },
    {
      company: 'Zyos S.A.S',
      period: 'Mar. 2019 – Mar. 2020',
      role: 'Semi-Senior Developer · Bogotá, Colombia',
      achievements: [
        'Development and maintenance of Java applications with PostgreSQL.',
        'Optimization of accounting processes and interest calculations.',
      ],
    },
    {
      company: 'Fundación Hematológica Colombia',
      period: 'Mar. 2019 – Mar. 2020',
      role: 'Development Assistant · Bogotá, Colombia',
      achievements: [
        'In-house applications with PHP, JavaScript, jQuery and PostgreSQL.',
        'Restoration and updating of information systems.',
        'Vendor support and requirements management.',
      ],
    },
  ],

  /* Datos: capacidades de IA */
  aiItems: [
    {
      icon: '◖',
      title: 'STT / TTS',
      description: 'Speech-to-text and text-to-speech conversion.',
    },
    {
      icon: '✣',
      title: 'NLP',
      description:
        'Natural language processing and intent analysis.',
    },
    {
      icon: '▣',
      title: 'Autonomous agents',
      description: 'Decision-making and task execution.',
    },
    {
      icon: '⌘',
      title: 'Document processing',
      description:
        'Intelligent information extraction and classification.',
    },
  ],

  /* Datos: opciones del selector de contacto */
  subjectOptions: [
    'Job opportunity',
    'Project / collaboration',
    'Technical query',
    'Other',
  ],
} satisfies Translations;
