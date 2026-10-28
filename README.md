# Jardinería Mateo

Landing page moderna y profesional para una empresa de jardinería y mantenimiento de exteriores. El proyecto está pensado para presentar servicios, transmitir confianza, destacar la experiencia del negocio y facilitar la captación de clientes a través de una web clara, visual y fácil de navegar.

## Descripción del proyecto

Jardinería Mateo es una web de marca para un negocio especializado en:

- Siega y cuidado del césped
- Desbroces y limpieza de parcelas
- Tala de árboles y mantenimiento de arbolado
- Mantenimiento de jardines y setos
- Cuidado fitosanitario
- Rocallas y parterres

La página está diseñada para reflejar un estilo natural, elegante y cercano, con una estética inspirada en los espacios verdes y la tranquilidad de un jardín bien cuidado.

## ¿Por qué este proyecto?

Este proyecto nace para ayudar a una empresa local a dar visibilidad online, mejorar su imagen profesional y facilitar que clientes potenciales conozcan sus servicios, su aproach de trabajo y puedan contactar de forma rápida.

En un sector muy visual, una web bien estructurada ayuda a:

- transmitir confianza y calidad
- mostrar trabajos y servicios de forma clara
- aumentar la captación de clientes
- presentar la empresa como profesional y cercana
- ofrecer una experiencia moderna en dispositivos móviles y escritorio

## Tecnologías utilizadas

- React 19
- TypeScript
- Vite
- Tailwind CSS
- Lucide React
- ESLint

## Características principales

- Diseño responsive y adaptable a distintos tamaños de pantalla
- Sección hero con enfoque visual y mensaje principal
- Presentación de servicios con imágenes y descripciones
- Sección sobre la empresa y sus valores
- Galería visual para mostrar proyectos y jardines
- Testimonios y credibilidad
- Sección de contacto para captar leads
- Navegación con anclas para una experiencia fluida

## Estructura del proyecto

```bash
.
├── public/
│   ├── favicon.svg
│   ├── robots.txt
│   └── images/
│       └── hero-garden.jpg
├── src/
│   ├── App.tsx
│   ├── index.css
│   ├── main.tsx
│   ├── assets/
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Footer.tsx
│   │   │   └── Header.tsx
│   │   ├── sections/
│   │   │   ├── About.tsx
│   │   │   ├── Contact.tsx
│   │   │   ├── Gallery.tsx
│   │   │   ├── Hero.tsx
│   │   │   ├── Services.tsx
│   │   │   └── Testimonials.tsx
│   │   └── ui/
│   │       ├── Button.tsx
│   │       └── SectionHeading.tsx
│   ├── data/
│   │   ├── services.ts
│   │   └── testimonials.ts
│   ├── types/
│   │   └── index.ts
│   └── ...
├── index.html
├── package.json
├── tsconfig.json
├── vite.config.ts
├── eslint.config.js
└── README.md
```

## Instalación

1. Clona el repositorio:

```bash
git clone <url-del-repositorio>
cd jardineria-mateo
```

2. Instala las dependencias:

```bash
npm install
```

## Scripts disponibles

```bash
npm run dev
```

Inicia el proyecto en modo desarrollo con Vite.

```bash
npm run build
```

Genera la versión de producción para desplegar.

```bash
npm run preview
```

Previsualiza la aplicación construida localmente.

```bash
npm run lint
```

Ejecuta ESLint para comprobar la calidad del código.

## Cómo ejecutar el proyecto

Configura primero las variables de EmailJS (ver la sección siguiente) para habilitar el envío del formulario.

```bash
npm run dev
```

A continuación, abre la URL que indique la terminal (por ejemplo, http://localhost:5173).

## Configuración del formulario de contacto

El formulario utiliza [EmailJS](https://www.emailjs.com/) para enviar las solicitudes a `mateoasturiaas@gmail.com`, sin exponer credenciales privadas en un backend. Para activarlo:

1. Crea una cuenta de EmailJS y conecta el servicio de correo que recibirá los mensajes.
2. Crea una plantilla de correo con el destinatario fijo `mateoasturiaas@gmail.com`.
3. Usa estas variables en el contenido de la plantilla:
   - `{{name}}`: nombre completo de quien contacta
   - `{{phone}}`: teléfono de contacto
   - `{{email}}`: correo de quien contacta
   - `{{message}}`: mensaje opcional
4. Configura el campo **Reply-To** de la plantilla como `{{email}}` para poder responder directamente al cliente.
5. Copia `.env.example` a `.env.local` y completa los identificadores del servicio, la plantilla y la clave pública de EmailJS:

```env
VITE_EMAILJS_SERVICE_ID=tu_service_id
VITE_EMAILJS_TEMPLATE_ID=tu_template_id
VITE_EMAILJS_PUBLIC_KEY=tu_public_key
```

6. Reinicia el servidor de desarrollo después de crear o modificar `.env.local`. En producción, añade las mismas variables en la configuración de entorno de la plataforma donde se despliegue la web.

La clave pública de EmailJS está diseñada para usarse en el navegador; nunca incluyas claves privadas o credenciales de correo en variables `VITE_*`. Configura las restricciones de dominio y las medidas antispam disponibles en EmailJS antes de publicar.

## Objetivo del proyecto

Crear una presencia web profesional para una empresa de jardinería que transmita confianza, atención al detalle y una imagen natural de calidad. La idea es que la web funcione como una herramienta comercial y de presentación, ayudando a convertir visitas en clientes.

## Estado del proyecto

Actualmente es una landing page funcional y visualmente cuidada, lista para ampliarse con más secciones, formularios de contacto, integración con WhatsApp, reservas o gestión de clientes.

## Contribución

Las contribuciones son bienvenidas. Si quieres mejorar el diseño, añadir nuevas secciones o optimizar la experiencia de usuario, puedes abrir un pull request con tus cambios.

## Licencia

Este proyecto está bajo una licencia de uso educativo y personal, salvo que se indique lo contrario por parte del propietario del proyecto.

## Contacto

Jardinería Mateo

- Sitio web: disponible en el proyecto local / entorno de despliegue
- Email: añadir en la sección de contacto si se integra información real
- Teléfono: añadir con datos reales del negocio

## Nota

Este README ha sido diseñado para documentar el proyecto de forma clara y profesional, adaptado a una landing page para una firma de jardinería y mantenimiento exterior.
