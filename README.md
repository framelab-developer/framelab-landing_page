# FrameLab — Corporate Landing Page

Landing corporativa responsive para FrameLab, empresa tecnológica ubicada en Quito, Ecuador. Incluye categorías de productos, servicios, contacto por WhatsApp y la iniciativa **FrameLab AI**, claramente identificada como un proyecto en desarrollo. No existe integración real con Claude ni backend.

## Stack y requisitos

React, TypeScript, Vite, Tailwind CSS y Lucide React. Inter se sirve localmente. Requiere **Node.js 22.12+** y npm. Se recomienda Node.js 22 LTS, usado en GitHub Actions.

## Instalación y ejecución local

```sh
npm ci
npm run dev
```

Abrir la URL que imprime Vite (normalmente `http://localhost:5173`).

## Verificaciones y compilación

```sh
npm run typecheck
npm run build
npm run preview
```

El build verifica TypeScript y genera `dist/`. Preview permite revisar ese resultado localmente. Confirmar ambas traducciones, menú móvil, navegación por teclado, tamaños de pantalla pequeños, enlaces de contacto y ausencia de scroll horizontal antes de publicar.

## Estructura

- `src/components/layout`: header, navegación y footer.
- `src/components/sections`: hero, nosotros, productos, servicios, AI y contacto.
- `src/components/ui`: marca oficial, encabezados e ilustraciones SVG propias.
- `src/config/site.ts`: datos comerciales y canales de contacto.
- `src/i18n`: diccionarios tipados ES/EN y proveedor de idioma.
- `public`: favicon, imagen social, robots, sitemap y CNAME.
- `.github/workflows/deploy.yml`: compilación y despliegue de GitHub Pages.

## Configuración de WhatsApp, correo y redes

Editar `src/config/site.ts`:

- `whatsappNumber`: solo dígitos internacionales. El número proporcionado `0984395918` de Ecuador se configura como `593984395918` (se reemplaza el cero nacional por `593`).
- `email`: dirección real, o cadena vacía para ocultar el enlace.
- `socials`: URLs HTTPS reales de Instagram, Facebook o LinkedIn. Los valores vacíos no se renderizan.
- `url`: URL canónica del sitio.

Los botones generales navegan a la sección de contacto. Las consultas de categorías abren WhatsApp con un mensaje en el idioma seleccionado. Sin número configurado, las consultas navegan a contacto, que muestra un aviso en lugar de un enlace ficticio. Nunca colocar claves API ni información privada en este archivo: el bundle es público.

## Idiomas y accesibilidad

Español es el idioma inicial. La selección ES/EN se guarda en `localStorage` bajo `framelab-language`; también funciona si el navegador bloquea almacenamiento. Se actualizan `html.lang`, título y descripciones SEO al cambiar idioma. La URL es única, sin rutas separadas por idioma; los metadatos del HTML inicial son españoles para crawlers sin JavaScript.

Incluye enlace para saltar al contenido, navegación semántica, foco visible, menú con `aria-expanded` y cierre con Escape, e ilustraciones con etiquetas accesibles. Respeta `prefers-reduced-motion`. Las ilustraciones SVG son ligeras, no dependen de servicios externos ni requieren imágenes raster secundarias. No se utiliza lazy loading en SVG inline; no producen solicitudes de imagen adicionales.

## Despliegue en GitHub Pages

1. Crear un repositorio GitHub y subir este proyecto a la rama `main`, incluyendo `package-lock.json`.
2. En **Settings → Pages → Build and deployment**, seleccionar **GitHub Actions**.
3. Hacer push a `main` o ejecutar manualmente el workflow **Deploy to GitHub Pages**.
4. El workflow instala mediante `npm ci`, ejecuta `npm run build`, sube `dist` y publica con las Actions oficiales de Pages.

Se mantiene `base: '/'` porque se sirve desde la raíz de `framelabstore.com`. El workflow limita `contents` a lectura y concede `pages: write` e `id-token: write` únicamente al trabajo de despliegue. No se necesita token personal ni secretos de aplicación.

### Dominio personalizado

`public/CNAME` contiene `framelabstore.com` y Vite lo copia a `dist`.

1. En **Settings → Pages → Custom domain**, introducir `framelabstore.com`.
2. Configurar en el proveedor DNS los registros de dominio raíz que indique la documentación oficial de GitHub Pages. Eliminar registros incompatibles con esa configuración.
3. Si se usa `www`, configurar su CNAME al dominio de Pages asignado al repositorio.
4. Es recomendable verificar la propiedad del dominio en la cuenta GitHub siguiendo su instrucción TXT.
5. Esperar validación DNS y emisión del certificado; activar **Enforce HTTPS**.
6. Comprobar redirecciones, certificado, WhatsApp y vista social desde el dominio definitivo.

Referencia: https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site

Si cambia el dominio, actualizar `site.url`, canonical, Open Graph/Twitter en `index.html`, `public/robots.txt`, `public/sitemap.xml` y `public/CNAME`.

## Pasos manuales pendientes

- Crear/conectar el repositorio remoto: el directorio inicial estaba vacío y no contenía un repositorio Git.
- Habilitar Pages, subir a `main` y configurar/verificar el DNS del dominio.
- Agregar correo y redes sociales reales cuando se definan; por ahora no se muestran.
- Revisar el sitio publicado con Lighthouse para medir SEO, accesibilidad y rendimiento en el hosting definitivo. No se afirma una puntuación sin medirla.

FrameLab AI muestra una vista conceptual no interactiva. Sus recomendaciones, compatibilidad, cotizaciones e integración de inventario son funcionalidades previstas; no están disponibles actualmente y no implican una alianza oficial con Anthropic.

## Verificación realizada

- Instalación reproducible con `npm ci` y compilación de producción con TypeScript sin errores.
- Pruebas en Chromium sobre el build en español e inglés, a 320, 375, 390, 768, 1024 y 1440 px: sin scroll horizontal.
- Menú móvil: apertura, navegación, cierre al seleccionar una sección y cierre con Escape.
- Cambio ES/EN y persistencia tras recargar; `html.lang` actualizado.
- WhatsApp dirigido al número configurado; mensajes localizados y enlaces internos válidos.
- Preferencia de movimiento reducido respetada; sin errores de JavaScript durante las pruebas.
- Respuesta HTTP 200 de favicon, imagen social, robots, sitemap y CNAME en la vista previa de producción.
- Inspección visual de escritorio y móvil. Lighthouse y la validación de DNS/HTTPS del dominio quedan pendientes de publicación.

## Logo oficial

El original proporcionado se conserva en `src/assets/framelab-logo-original.png`. La versión WebP optimizada en `public/brand/framelab-logo.webp` se usa en el header, footer y sección de presentación, manteniendo la imagen completa y sus proporciones. El favicon y la imagen social también utilizan el logo oficial.
