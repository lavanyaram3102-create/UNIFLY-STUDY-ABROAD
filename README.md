Added vector asset set (SVG variants) optimized for header, square mark, and social preview.

Files added:
- assets/logo-header.svg (header wordmark + emblem)
- assets/logo-square.svg (compact emblem mark for avatars/favicons)
- assets/social-preview.svg (1200x630 social preview)

Updated:
- index.html now references assets/logo-header.svg for the header logo and assets/social-preview.svg for og:image

Notes:
- All new files are SVG vectors (scalable). If you later want PNG exports at specific sizes I can either rasterize them here as SVG-in-PNG (same Option A approach) or provide commands for local rasterization.
- The existing assets/logo.png remains in the repo; index.html now prefers the header SVG.

Next steps I can take at your request:
- Produce PNG exports (400x120, 800x240, 1200x630) from these SVGs and add them to the repo.
- Add multi-size favicons (ICO + PNG) using the square mark.
- Tweak colors, spacing, or create monochrome variants.

If you'd like PNG exports or favicons now, tell me which sizes and I’ll add them (Option A-style: saving SVG as .png file which works in modern browsers, or you can supply exact raster files).
