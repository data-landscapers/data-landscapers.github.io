# Data Landscapers — Logo & Favicon Pack

Production-ready brand assets for [data-landscapers.com](https://data-landscapers.com/).

## Concept

Africa rendered as topographic contour lines — a quiet nod to the site name
("landscapers") and to the analytical, mapping-as-method spirit of the work.
A magnifying glass over southern Africa picks up the contours in terracotta,
suggesting close reading / open-source intelligence without resorting to the
usual circuit-board or network-node clichés.

## Palette

| Role | Hex |
|---|---|
| Cream background | `#F5F1E8` |
| Navy ink | `#1A2238` |
| Terracotta accent | `#C25B3F` |
| Handle slate-blue | `#7B8CA8` |

## Files

```
logo/
  logo_master_2048.png           Cream background, 2048×2048
  logo_master_1024.png           Cream background, 1024×1024
  logo_master_512.png            Cream background,  512×512
  logo_transparent_2048.png      Transparent background, 2048×2048
  logo_transparent_1024.png      Transparent background, 1024×1024
  logo_transparent_512.png       Transparent background,  512×512

header/
  header_lockup_2x.png           Retina-ready horizontal lockup, transparent
  header_lockup_1x.png           Standard-resolution version
  header_lockup_cream.png        Cream-backed preview

favicon/
  favicon.svg                    Vector master (recommended for modern browsers)
  favicon.ico                    Multi-resolution .ico (16/32/48)
  favicon-{16..512}x{...}.png    Raster fallbacks at every common size
  apple-touch-icon.png           180×180 cream background for iOS
  android-chrome-{192,512}*.png  Cream background for Android home screens

site.webmanifest                 PWA manifest
install.html                     Drop-in <head> tags for your site
```

## Installing on the site

1. Copy the contents of `favicon/`, `site.webmanifest`, plus the `apple-touch-icon.png`
   and `android-chrome-*.png` files, to the **site root**.
2. Paste the contents of `install.html` into your `<head>`.
3. For Zensical: place the files under `assets/` and reference them from your
   theme's head partial. Update the paths if not in the root.

## Notes on the favicon

- The favicon is intentionally **minimal**: just the magnifying glass with a
  terracotta dot inside. The full continent + Horn + east-coast detail of the
  master logo doesn't survive being squashed to 16×16, where it reads as a
  blob or worse (we tried… it briefly looked like a squirrel).
- A single design is used at every size so the brand mark is consistent across
  browser tabs, bookmarks, home-screen icons and PWA installs.
- The SVG is **hand-built** (not derived from a downscaled PNG), so it stays
  crisp at every size including 16×16.
- The SVG has a transparent background by default. To bake in the cream
  background, uncomment the `<rect>` at the top of `favicon.svg`.

## Reproduction

The Python scripts used to generate the asset pack live in the project root
(`build_logo_assets.py`, `build_favicon_svg.py`, `build_favicon_pack.py`,
`build_header_lockup.py`). The source-of-truth master logo is
`logo_v10_contour_final.png`.
