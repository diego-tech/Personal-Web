# Auditoría del Portfolio — dmunoz.dev

**Fecha:** 11 de junio de 2026
**Stack detectado:** Next.js 13.1.x (Pages Router) · React 18 · Chakra UI 2.4 · Framer Motion 8 · Emotion · next-sitemap 4
**Estructura:** `pages/` (index single-page + detalle de proyectos), `components/` (UI), `libs/theme.js` (tema Chakra), `public/` (assets estáticos). Sin TypeScript, sin tests, sin API routes ni formularios.

---

## 1. Resumen ejecutivo

El portfolio es sólido como base: build limpio, sitio 100% estático, navegación simple y un sistema de tema claro/oscuro coherente. Sin embargo, presenta **bugs reales** (título de página sobrescrito, canonical incorrecto en todas las subpáginas, anchors anidados, typo que rompe el modo de color inicial, script de lint roto), **una vulnerabilidad crítica en Next.js 13.1**, un **SEO muy por debajo de su potencial** (sin Open Graph, sin JSON-LD, description genérica, jerarquía de headings incorrecta) y **problemas de accesibilidad graves** (eliminación global del outline de foco). En contenido, el texto comunica formación y cronología, pero el tono es de CV corporativo: falta propuesta de valor diferencial y CTA claro.

La buena noticia: casi todos los problemas de alto impacto son de esfuerzo bajo o medio.

## 2. Puntuaciones (0–10)

| Área | Nota | Comentario breve |
|---|---|---|
| Personalidad | 5 | Hay cronología personal (timeline desde Scratch, bonito detalle), pero los textos de experiencia suenan a descripción de oferta de empleo, no a persona. |
| Diseño | 6 | Limpio y coherente (Space Mono + acentos por modo), pero el carrusel de proyectos con `minWidth: 1000px` rompe en móvil y las secciones de educación son muros de texto. |
| Usabilidad | 5 | Single-page sin navegación por secciones; el hint "Descargar CV Aquí" flota descontextualizado; carrusel horizontal con botones poco descubrible. |
| SEO | 3 | Sin OG/Twitter cards, sin JSON-LD, canonical erróneo en subpáginas, description pobre ("Diego's Homepage"), `lang="en"` con contenido en español, doble `<title>` en index. |
| Seguridad | 5 | Sitio estático sin secretos ni formularios (poca superficie), pero Next 13.1 con CVE crítico, sin cabeceras de seguridad y teléfono personal publicado en el código. |
| Accesibilidad | 4 | `outline: none` global elimina el foco de teclado; jerarquía de headings rota (h1 en nav, h3 en secciones sin h2); semántica de listas incorrecta en Experience. |
| Rendimiento | 6 | Estático y ligero en JS, pero fuente vía `@import` (render-blocking), PNGs de hasta 1.2 MB sin optimizar y `<Image>` de Chakra (sin next/image) en páginas de proyecto. |
| Calidad técnica | 6 | Componentes pequeños y legibles, pero hay código con bugs latentes (Layout anidado, props inválidas como `align` en Box, typos en config) y lint inejecutable. |

## 3. Problemas detectados

Formato: **[Prioridad / Esfuerzo]** — Problema → Impacto → Recomendación.

### Bugs y técnica

1. **[Alta/Bajo]** Script `lint` roto (`next-lint` no existe) → no se puede ejecutar ESLint → cambiar a `next lint`.
2. **[Alta/Bajo]** `components/projects.js` envuelve el carrusel en `Layout` (article) → un segundo `<title>Proyectos - …</title>` sobrescribe el título de la home y anida `<article>` con animaciones duplicadas → quitar el wrapper.
3. **[Alta/Bajo]** `libs/theme.js`: `inititalColorMode` (typo) → `ColorModeScript` recibe `undefined` y el primer render puede parpadear/desincronizarse → corregir a `initialColorMode`.
4. **[Alta/Bajo]** `components/project.js` (`Title`): `<NextLink><Link>` anidados → `<a>` dentro de `<a>` (HTML inválido, warning de hidratación en Next 13) → `<Link as={NextLink}>`.
5. **[Media/Bajo]** `apple-touch-icon` con ruta relativa → 404 en `/projects/*` → ruta absoluta.
6. **[Media/Bajo]** Datos inconsistentes: KPMG "Data Analyst Staff II — Sep 2023 - **Actualidad**" convive con Senior II (2024-2025) y DENTSU (2025-Actualidad) → corregir a Sep 2024.
7. **[Media/Bajo]** Typos visibles: "mnodelo", "artifical", "Artifiial", "desempeñándo", "Superiore", "Higher Nacional Diploma", "Altery Designer", "formandome", "Lifeycles", "Profesional Practice".
8. **[Media/Bajo]** Enlace `tel:` con `target="_blank"` y `title` que habla de email → confuso para lectores de pantalla → corregir title y quitar target.
9. **[Baja/Bajo]** `align` no es prop válida de `Box`/`Container` en Chakra (funciona por pasar al DOM, pero es atributo HTML deprecado) → usar `textAlign`.

### SEO

10. **[Alta/Bajo]** Canonical hardcodeado a `https://www.dmunoz.dev/` en `_document.js` → **todas las páginas de proyecto canonicalizan a la home** (riesgo real de desindexación) → canonical dinámico por ruta.
11. **[Alta/Bajo]** Sin Open Graph ni Twitter Card → compartir en LinkedIn (clave para este perfil) muestra un enlace sin imagen ni descripción → añadir og:/twitter: completos.
12. **[Alta/Bajo]** Meta description "Diego's Homepage" → CTR pobre en resultados → description rica con nombre, rol y tecnologías.
13. **[Alta/Media]** Sin JSON-LD → añadir schema.org `Person` (nombre, jobTitle, empresa, sameAs LinkedIn/GitHub).
14. **[Media/Bajo]** `<html lang="en">` con contenido en español → señal de idioma incorrecta para Google y lectores de pantalla → `lang="es"`.
15. **[Media/Media]** Jerarquía de headings: h1 = logo del nav, nombre = h2, secciones = h3 sin h2 intermedio → h1 debe ser el nombre/propuesta, secciones h2.

### Seguridad

16. **[Alta/Bajo]** Next 13.1.1 con vulnerabilidad **crítica** (npm audit) + 17 más en cadena de dependencias, todas con fix disponible → `npm audit fix` (sube a Next 13.5.x, mismo major).
17. **[Media/Bajo]** Sin cabeceras de seguridad (X-Frame-Options, X-Content-Type-Options, Referrer-Policy, Permissions-Policy) → añadir `headers()` en `next.config.js`.
18. **[Media/Bajo]** Algunos enlaces externos `target="_blank"` sin `rel="noopener noreferrer"` (GitHub en breastcancertfm, varios en otros proyectos) → añadirlo.
19. **[Baja/—]** Teléfono personal (`tel:633543240`) y email publicados en HTML → expuesto a scraping/spam. Es decisión personal; se recomienda al menos ser consciente. *(Se deja como está: dato de contacto intencional.)*
20. **[Info]** Sin variables de entorno, sin `dangerouslySetInnerHTML`, sin formularios ni endpoints: superficie de ataque mínima. ✅

### Accesibilidad

21. **[Alta/Bajo]** `*,*:focus,*:hover { outline:none; box-shadow:none }` global → usuarios de teclado no ven dónde están (WCAG 2.4.7) → restaurar foco con `:focus-visible`.
22. **[Media/Bajo]** `Experience` renderiza un `<ul>` con un solo `<li>` por cada entrada → semántica de lista falsa → usar `<article>` directamente.
23. **[Media/Bajo]** Alt text pobre/duplicado: "Profile Image" (en inglés), tres imágenes con alt "TFMBreastCancer" → describir contenido en español.
24. **[Media/Bajo]** Botones del carrusel con `aria-label` en inglés ("Scroll Left") en sitio en español; hint de CV que desaparece a los 10 s no es perceptible para todos.
25. **[Baja/Media]** Contraste: `#779ECB` sobre `#f9fafb` para links en modo claro ≈ 2.9:1 (< 4.5:1 WCAG AA). Valorar oscurecer el acento en modo claro para texto.

### Rendimiento

26. **[Media/Bajo]** Google Fonts vía `@import` en styled-jsx → render-blocking y doble round-trip → `<link rel="preconnect">` + stylesheet en `_document` (o `next/font` al subir de versión).
27. **[Media/Media]** PNGs sin optimizar: `cesfuencarral/1.png` 1.2 MB, varios de 400-800 KB; páginas de proyecto usan `<Image>` de Chakra (sin lazy/resize de next/image) → migrar a `next/image` y/o convertir a WebP.
28. **[Baja/—]** First Load JS ~175 kB: razonable para Chakra+Framer. Sin componentes cliente innecesarios adicionales.

### UX / Diseño / Contenido

29. **[Alta/Media]** Carrusel de proyectos con bloques `minWidth: 1000px` → en móvil obliga a scroll horizontal con tarjetas cortadas; los botones flechas tapan contenido → grid responsive (1 col móvil / 2 col desktop) sin scroll.
30. **[Media/Media]** Sin navegación por secciones ni CTA: el nav está vacío (solo logo + toggle). Un visitante no puede saltar a Proyectos o Contacto → añadir enlaces de ancla.
31. **[Media/Media]** Educación: summaries son listas de 15+ asignaturas en texto plano → muro de texto que nadie lee → resumir a 3-5 ítems clave.
32. **[Media/Alta]** Identidad: los textos de experiencia están en "lenguaje LinkedIn" (frases de 60 palabras, jerga: "explotación eficiente de grandes volúmenes"). La bio sí tiene voz (Scratch 2014 👏). Reescribir experiencia en frases cortas y concretas con logros medibles.
33. **[Media/Bajo]** El subtítulo del hero "(Desarrollador y Analista de Datos)" entre paréntesis resta seguridad → afirmar la propuesta: qué hace y para quién.
34. **[Baja/Bajo]** Footer mínimo; hint flotante "Descargar CV Aquí" con flecha que apunta a la nada en móvil.

## 4. Quick wins (implementados en esta rama)

- Arreglar script lint + ejecutarlo.
- `npm audit fix` → Next 13.5.x (resuelve crítica) y resto de dependencias.
- Typo `initialColorMode`, Layout anidado, anchors anidados, apple-touch-icon, `lang="es"`.
- Canonical dinámico + Open Graph + Twitter Card + description optimizada + JSON-LD Person.
- Restaurar focus visible (`:focus-visible`), semántica de Experience, alt texts, aria-labels en español.
- Cabeceras de seguridad en `next.config.js` y `rel="noopener noreferrer"` donde faltaba.
- Fuente con `preconnect` + `<link>` en lugar de `@import`.
- Grid de proyectos responsive (sustituye al carrusel roto en móvil).
- Corrección de typos y fechas KPMG.
- Jerarquía de headings (h1 nombre, h2 secciones).

## 5. Mejoras profundas recomendadas (no implementadas — requieren decisión/contenido del autor)

1. **Reescritura de contenido (Fase C):** experiencia con logros medibles ("reduje X un Y%"), bio con propuesta de valor en 1 frase en el hero. Esfuerzo: Medio. Impacto: Alto.
2. **Optimización de imágenes:** convertir PNGs a WebP (ahorro estimado >70%) y migrar páginas de proyecto a `next/image`. Esfuerzo: Medio.
3. **Nav con secciones + CTA "Contacto":** anclas a Proyectos/Experiencia/Contacto y botón primario "Hablemos" (mailto). Esfuerzo: Medio.
4. **Migración a Next 14/15 + App Router + `next/font` + Metadata API:** moderniza todo el stack SEO/perf. Esfuerzo: Alto. Hacer tras estabilizar lo anterior.
5. **Sección de contacto real** al final de la página (no solo iconos en el header). Esfuerzo: Bajo-Medio.
6. **Contraste AA en modo claro** (acento `#5A82B8`/`#4a72a8` para texto-link). Requiere decisión estética.
7. **Página de proyectos con casos de estudio**: problema → solución → resultado, en lugar de lista de hitos.

## 6. Plan de evolución por fases

- **Fase A — Correcciones técnicas** ✅ (esta rama): lint, dependencias, bugs 1-9.
- **Fase B — Visual/UX** ✅ parcial (esta rama): grid de proyectos responsive. Pendiente: nav con anclas, sección contacto, contraste.
- **Fase C — Contenido/personalidad** ⏳: reescritura de copy (necesita input del autor).
- **Fase D — SEO** ✅ (esta rama): metadata, OG, JSON-LD, canonical, lang, headings.
- **Fase E — A11y/Seguridad/Perf** ✅ parcial: focus, headers, semántica, preconnect. Pendiente: imágenes WebP, next/image, contraste AA.
