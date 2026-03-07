# Academician Giyas Umarov Memorial

**Live: [giyas-umarov.com](https://giyas-umarov.com)**

A multilingual memorial website dedicated to **Academician Giyas Yakubovich Umarov (1921–1988)** — Central Asian nuclear physicist, founder of heliotechnology in Uzbekistan, creator of the Large Solar Furnace in Tashkent, and pioneer of aquifer thermal energy storage (ATES).

![OG Preview](og-image.png)

## About Giyas Umarov

Giyas Yakubovich Umarov was born in Tashkent on December 25, 1921. He became the first candidate of sciences in nuclear physics in all of Uzbekistan after defending his dissertation at Moscow State University in 1949 — where he famously debated Lev Landau over the mass of the neutrino. Offered a prestigious position in Moscow, he chose to return to Tashkent to build scientific infrastructure in his homeland.

In 1963, he pivoted from nuclear physics to solar energy, founding the Helio Department at the Physical-Technical Institute in Tashkent. He created the journal *Heliotechnika* (published internationally by Springer as *Applied Solar Energy*), represented the USSR at UNESCO's "The Sun at the Service of Humanity" conference in Paris (1973), and championed the construction of the **Large Solar Furnace** — a 1 MW concentrating solar facility completed in 1987, one of only two of its kind in the world.

His 1971 paper on storing solar energy in aquifers was cited by Lawrence Berkeley National Laboratory as the **starting point** for the entire field of Aquifer Thermal Energy Storage (ATES) — two years before any Western researchers published comparable work.

Over five decades, he supervised 54 doctoral dissertations, authored 4 monographs and 250+ scientific articles, held 31 patents, and was recognized by Prof. Daniel Alpert (USA) at Davos in 1990 as a scientist whose research was "50–60 years ahead of its time."

## Site Structure

```
giyas-umarov.com/
├── index.html                    # Main single-page memorial (8 languages via JS i18n)
├── articles/                     # English article pages
│   ├── nuclear-physics.html      #   Landau debate, beta-spectroscopy, plasma research
│   ├── heliotechnology.html      #   Solar energy, Large Solar Furnace, Heliotechnika
│   ├── aquifer-thermal-storage.html  # ATES — the 1971 foundation
│   ├── stirling-engines.html     #   Solar Stirling engine research (1972–1978)
│   ├── agricultural-solar.html   #   PCSR seed treatment, solar drying, desalination
│   ├── scientific-legacy.html    #   Global influence, awards, institutional roles
│   └── publications.html         #   Complete bibliography & source documents
├── ru/articles/                  # Russian translations (7 pages)
├── uz/articles/                  # Uzbek translations (7 pages)
├── fr/articles/                  # French translations (7 pages)
├── es/articles/                  # Spanish translations (7 pages)
├── ko/articles/                  # Korean translations (7 pages)
├── ja/articles/                  # Japanese translations (7 pages)
├── zh/articles/                  # Mandarin Chinese translations (7 pages)
├── css/articles.css              # Shared article stylesheet
├── js/articles.js                # Shared article JS (theme, mobile menu, scroll reveals)
├── assets/docs/                  # PDF source documents
│   ├── thermal-energy-storage-aquifers-lbl-workshop.pdf
│   ├── military-report-ADA357675.pdf
│   ├── nasa-solar-energy-report-73151640.pdf
│   ├── stirling-engine-design-manual-nasa.pdf
│   └── ... (12 PDFs total)
├── gallery/                      # Historical photographs
├── images/                       # Site images
├── robots.txt                    # Search engine crawl directives
├── sitemap.xml                   # XML sitemap with hreflang annotations
├── og-image.png                  # Open Graph social sharing image
└── favicon.svg                   # Site favicon
```

**57 pages total** — 1 homepage + 56 article pages (7 articles × 8 languages)

## Features

- **8 languages** — English, Russian (Русский), Uzbek (O'zbek), French (Français), Spanish (Español), Korean (한국어), Japanese (日本語), Mandarin Chinese (中文)
- **7 in-depth articles** — Nuclear physics, heliotechnology, ATES, Stirling engines, solar agriculture, scientific legacy, publications
- **Dark/light mode** — Persisted via localStorage across all pages
- **Fully responsive** — Mobile-first design with hamburger navigation
- **Photo gallery** — 18 historical photographs with notable figures (Keldysh, Kapitsa, Paton, Kirillin, U.S. Senate delegation)
- **PDF source documents** — LBL workshop proceedings, NASA reports, U.S. military technical report ADA357675
- **Scroll animations** — IntersectionObserver-based reveal effects

## SEO

Every page includes professional SEO optimization:

- **Meta tags** — Unique title, description, and keywords per page per language
- **Structured data** — JSON-LD schemas (Person, WebSite, Article) with multilingual names
- **Open Graph** — Full `og:title`, `og:description`, `og:image`, `og:locale` per page
- **Twitter Cards** — `summary_large_image` with language-specific content
- **Hreflang** — Complete `hreflang` annotations (en/ru/uz/fr/es/ko/ja/zh + x-default) on all pages
- **Canonical URLs** — Self-referencing canonical on every page
- **XML Sitemap** — All 57 URLs with cross-language hreflang references
- **robots.txt** — Allows all crawlers with sitemap reference

### Target Keywords

| Language | Primary Keywords |
|----------|-----------------|
| English | Giyas Umarov, heliotechnology Uzbekistan, Large Solar Furnace Tashkent, Central Asian physicist, aquifer thermal energy storage, Applied Solar Energy journal |
| Russian | Гияс Умаров, гелиотехника Узбекистан, Большая солнечная печь Ташкент, академик Умаров, журнал Гелиотехника |
| Uzbek | Giyas Umarov, geliotexnika O'zbekiston, Katta quyosh pechi Toshkent, akademik Umarov |
| French | Oumarov héliotechnologie, Grand Four Solaire Tachkent, énergie solaire Ouzbékistan |
| Spanish | Umarov heliotecnología, Gran Horno Solar Taskent, energía solar Uzbekistán |
| Korean | 기야스 우마로프, 태양열기술 우즈베키스탄, 대형 태양로 타슈켄트, 중앙아시아 물리학자 |
| Japanese | ギヤス・ウマロフ, 太陽熱技術 ウズベキスタン, 大型太陽炉 タシケント, 中央アジア物理学者 |
| Chinese | 吉亚斯·乌马罗夫, 太阳能技术 乌兹别克斯坦, 大型太阳炉 塔什干, 中亚物理学家 |

## Key Achievements

| Achievement | Details |
|---|---|
| **First nuclear physicist from Uzbekistan** | Defended dissertation at Moscow State University (1949), debated Landau on neutrino mass |
| **Founded heliotechnology in Uzbekistan** | Created the Helio Department, 4 laboratories, and a design bureau |
| **Large Solar Furnace** | 1 MW concentrating solar facility near Tashkent — one of two in the world |
| **Heliotechnika journal** | Founded the premier Soviet solar energy journal (now Springer's *Applied Solar Energy*) |
| **ATES pioneer** | 1971 paper cited by Lawrence Berkeley Lab as the starting point for aquifer thermal storage |
| **Stirling engine research** | 8 papers (1972–1978) anticipating modern dish-Stirling solar systems |
| **54 dissertations supervised** | Trained generations of Central Asian scientists |
| **250+ publications, 31 patents** | Across nuclear physics, solar energy, agriculture, and thermal storage |
| **International recognition** | UNESCO Paris 1973, cited alongside 13 Nobel laureates (Zeldovich & Khlopov, 1981), praised at Davos 1990 |

## Career Timeline

| Period | Role |
|---|---|
| 1946 | Studies at the Radium Institute, Leningrad (accepted by Academician Vavilov) |
| 1949 | First Uzbek candidate of sciences in nuclear physics; debates Landau; returns to Tashkent |
| 1957 | Organizes Uzbek scientists at JINR Dubna; develops beta-spectrograph |
| 1958 | Establishes plasma laboratory in Tashkent under Kurchatov's direction |
| 1963 | Pivots to solar energy; founds Helio Department at FTI Tashkent |
| 1965 | Founds *Heliotechnika* journal |
| 1971 | Publishes foundational ATES paper in *Geliotekhnika* |
| 1973 | Represents USSR at UNESCO "The Sun at the Service of Humanity" in Paris |
| 1975 | Demonstrates solar furnace to V.A. Kirillin and the Military-Industrial Commission |
| 1976 | CPSU resolution to build the Large Solar Furnace |
| 1987 | Large Solar Furnace completed near Tashkent |
| 1988 | Final work on plasma equilibrium in tokamak; dies in Tashkent |

## Tech Stack

- Pure HTML/CSS/JavaScript — no framework, no build step
- Homepage i18n via inline JS translation dictionary (`data-i18n` attributes)
- Article pages as separate HTML files per language
- CSS custom properties for theming (dark/light mode via `data-theme`)
- Google Fonts: Playfair Display (headings) + Lato (body)
- Hosted on [Vercel](https://vercel.com) with auto-deploy from GitHub
- Vercel Analytics + Speed Insights

## Family

Giyas Umarov is the grandfather of the site's creators. His scientific legacy connects with the broader family heritage of service to Uzbekistan.

**Related family memorials:**
- [Aminjan Niyazov](https://www.amin-niyazov.com) — First Secretary of CP Uzbekistan (1903–1973)
- [Gulom Bobojonov](https://www.gulam-babodjanov.com) — Rector, Scientist of Silk (1907–1955)

## Deploy

```bash
npx vercel --prod
```

Or push to `main` — Vercel auto-deploys.

## License

© 2025 Umarov Family. All rights reserved.
