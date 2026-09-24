# Diego Ocampo Melgar | professional research site

Static bilingual professional site for GitHub Pages, configured for `https://diegoocampo.earth/`.

## Structure

- `index.html`: Spanish main site
- `en/index.html`: English version
- `assets/css/main.css`: layout and visual system
- `assets/js/main.js`: reveal animation and footer year
- `CNAME`: GitHub Pages custom domain
- `robots.txt`: crawler instructions
- `sitemap.xml`: Spanish and English URLs with language alternates
- `.nojekyll`: serve the static files directly

## SEO configuration

Both language versions include:

- unique page titles and descriptions
- canonical URLs on `diegoocampo.earth`
- reciprocal `hreflang` tags for Spanish and English
- `x-default` pointing to the Spanish homepage
- Open Graph and Twitter sharing metadata
- Schema.org `Person` structured data linked to ORCID, LinkedIn, ResearchGate and GitHub
- Schema.org `WebSite` structured data

## Deploy/update with GitHub Pages

Copy the contents of this folder to the root of the existing GitHub Pages repository and commit/push to `main`. Keep the `CNAME` file in the repository.

After deployment, submit `https://diegoocampo.earth/sitemap.xml` in Google Search Console and request indexing for both the Spanish homepage and `/en/`.

## Images

The current version references remote Copernicus imagery for the large visual sections and social sharing image. For long-term production use, replace these with optimized local images under `assets/images/` and update the corresponding CSS and Open Graph URLs.

## Design attribution

Visual direction adapted from the Tessellate template by HTML5 UP, distributed under CC BY 3.0. Attribution is retained in the footer.
