# Diego Ocampo Melgar | professional research site

Static bilingual professional site for GitHub Pages, configured for `https://diegoocampo.earth/`.

## Structure

- `index.html`: Spanish main site
- `en/index.html`: English main site
- `projects/<slug>/index.html`: five Spanish project case studies
- `en/projects/<slug>/index.html`: five English project case studies
- `assets/images/projects/`: local project figures extracted from the supplied project document
- `assets/css/main.css`: shared visual system
- `assets/js/main.js`: reveal animation, project quick-view interaction, image dialog and scroll progress
- `CNAME`: GitHub Pages custom domain
- `robots.txt`: crawler instructions
- `sitemap.xml`: all Spanish and English pages with reciprocal language alternates
- `.nojekyll`: serve static files directly

## Projects

- Reconstruir el pasado para orientar la restauración del futuro
- Detectar floraciones algales nocivas desde el espacio
- Riesgo de atropello del pudú en la red vial de Chiloé
- XEMA: detección automatizada de asentamientos en franjas eléctricas
- CODCAM: inteligencia geoespacial para riesgo físico climático en minería de alta montaña

## SEO

Every project page includes a unique title and description, canonical URL, reciprocal `hreflang`, Open Graph/Twitter metadata and Schema.org `CreativeWork` structured data. The homepage contains an `ItemList` for the project portfolio.

## Deploy

Copy the contents of this folder to the root of the GitHub Pages repository and push to `main`. Keep `CNAME`. Google Search Console does not need to be re-verified; the updated sitemap will expose the new URLs. You can request indexing manually for the five new Spanish pages if you want faster discovery.

## Design attribution

Visual direction adapted from Tessellate by HTML5 UP, CC BY 3.0. Attribution remains in the footer.
