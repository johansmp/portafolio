# Portafolio — Johan Morales Pinzón

Portafolio profesional recreado en **Angular 21** a partir de la landing page
estática original (`../portfolio-johan-morales.html`). Ingeniero de software
senior especializado en .NET, Angular, automatización e inteligencia artificial.

## Estructura

```
src/
├── index.html                  # Meta, título y descripción (es)
├── styles.scss                 # Estilos globales (tema oscuro, responsive)
├── main.server.static.ts       # Entrada del servidor para el build estático
└── app/
    ├── app.ts / app.html       # Componente raíz: capas visuales + secciones
    ├── app.config.static.ts    # Configuración de servidor (Prerender)
    ├── app.routes.static.ts    # Rutas estáticas (RenderMode.Prerender)
    ├── shared/                 # Directivas: revelado al scroll y progreso
    ├── header/                 # Barra sticky + menú móvil (signal)
    ├── hero/                   # Hero con foto, arte abstracto y contacto
    ├── skills/                 # 6 tarjetas de competencias (datos @for)
    ├── projects/               # 3 proyectos con arte por tipo (@switch)
    ├── principles/             # 5 principios de trabajo
    ├── experience/             # Timeline laboral + panel de IA
    ├── contact/                # Formulario mailto (FormsModule + signal)
    └── footer/                 # Pie con año dinámico
```

## Internacionalización (i18n)

El portafolio está disponible en **español (es)** e
**inglés (en)** mediante un servicio propio basado en
**signals** (sin librerías externas ni traductores
automáticos; las traducciones están escritas a mano):

```
src/app/i18n/
├── i18n.types.ts        # Tipos: Locale, Translations, StringKey
├── translations.es.ts   # Diccionario español (canónico)
├── translations.en.ts   # Diccionario inglés (validado con satisfies)
└── i18n.service.ts      # Estado reactivo, detección y persistencia
```

**Cómo funciona:**

- `I18nService.t('clave')` traduce textos sueltos; al
  leer un `signal`, los templates se re-renderizan
  solos al cambiar de idioma.
- `I18nService.translations()` expone las listas de
  datos (skills, proyectos, principios, empleos, IA),
  consumidas por los componentes vía `computed()`.
- **Detección inicial:** `localStorage`/`navigator.language`
  en el navegador y el header `Accept-Language` en el SSR.
- Al cambiar de idioma se actualizan el `<title>`, la
  meta `description` y el atributo `lang` del `<html>`.
- El conmutador ES/EN vive en la barra superior (se
  muestra como ES/EN en móviles).

**Agregar un idioma:** crear `translations.<code>.ts`
con `satisfies Translations` — el compilador avisa si
falta alguna clave — y registrarlo en
`availableLocales` del servicio.

## SSR e idiomas

`app.routes.server.ts` usa `RenderMode.Server` para
que cada petición se renderice en el servidor: así el
`I18nService` lee el header `Accept-Language` de la
petición (`REQUEST`) y devuelve la landing en el
idioma del visitante (SEO-friendly). Sin este modo,
el SSR serviría el HTML prerenderizado con el idioma
por defecto.

Para correr el servidor SSR en localhost (la protección
SSRF bloquea hosts no configurados):

```bash
$env:NG_ALLOWED_HOSTS='localhost'   # PowerShell
npm run serve:ssr:portafolio
```

## Despliegue en GitHub Pages

GitHub Pages solo sirve archivos estáticos, así que
existe la configuración `github-pages`
(`outputMode: static`): prerenderiza la landing a
HTML/CSS/JS puro en tiempo de build, sin servidor:

```bash
npm run build:gh-pages
```

El sitio generado queda en **`dist/portafolio/browser/`**
y usa `<base href="./">` (definida por `baseHref` en
`angular.json`), por lo que funciona tanto en la raíz
del dominio como en un subdirectorio
(`https://<usuario>.github.io/<repo>/`) sin
reconstruir.

**Para publicar**, despliega el *contenido* de
`dist/portafolio/browser/` en cualquiera de estas
formas:

1. **Rama `gh-pages`:** crea una rama huérfana, copia
   ahí el contenido de `dist/portafolio/browser/`
   y activa *Settings → Pages → Deploy from a branch
   → gh-pages*.
2. **Carpeta `docs/`:** copia el contenido a `docs/`
   en la rama principal y activa *Deploy from a branch
   → /docs*.

**i18n en hosting estático:** el HTML viene
prerenderizado en el idioma por defecto (`es`). Al
cargar, el `I18nService` respeta ese idioma durante
la hidratación (cero desfase) y lo corrige al
idioma real del navegador justo después de la
primera renderización; la elección del visitante
persiste en `localStorage`.

> El build por defecto (`npm run build`,
> `outputMode: server`) sigue disponible para
> hosting con Node.js, donde el SSR detecta el
> idioma del visitante con el header
> `Accept-Language` en cada petición.

## Comandos

```bash
npm install           # Instalar dependencias
npm start             # Servidor de desarrollo (http://localhost:4200)
npm run build         # Build de producción (browser + SSR)
npm run build:gh-pages # Build estático para GitHub Pages (dist/portafolio/browser)
npm test              # Tests unitarios con Vitest (25 pruebas)
npm run serve:ssr:portafolio   # Servidor SSR (dist)
```

## Notas de la recreación

- **Componentes standalone** con `signals` para el estado del menú móvil,
  la nota del formulario y el año del footer.
- **Formulario template-driven** (`FormsModule`): al enviarlo construye un
  enlace `mailto:` con el motivo, nombre, correo y mensaje; no almacena datos.
- **Estilos globales** en `styles.scss` que preservan el cascade y los
  breakpoints originales (1000px y 700px) y respetan
  `prefers-reduced-motion`.
- **Capa visual** (CSS puro, sin dependencias): aurora de fondo con
  deriva, grano de película, barra de progreso de lectura, revelado de
  secciones al scroll (realce progresivo: sin JS todo es visible),
  entrada escalonada del hero, foto con anillo degradado, badge de
  disponibilidad y micro-interacciones en botones y tarjetas.
- **SSR/SCSS** tal como vino el proyecto (`outputMode: server`).
