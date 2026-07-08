# Web Design Learning — 10 primera (srednji nivo)

Kolekcija od 10 samostalnih vežbi za učenje web dizajna (HTML, CSS, JavaScript). Svaki folder je nezavisan — nema build alata, nema instalacije, samo otvoriš `index.html` u browseru.

## Sadržaj

| # | Folder | Tema | Ključni koncepti |
|---|--------|------|-------------------|
| 01 | `01-css-grid` | CSS Grid Layout | `grid-template-columns`, `auto-fit`/`minmax`, `grid-template-areas` |
| 02 | `02-flexbox` | Flexbox Layout | `justify-content`, `align-items`, `flex-wrap`, `order` |
| 03 | `03-animations-transitions` | Animacije i tranzicije | `transition`, `@keyframes`, `transform`, 3D flip |
| 04 | `04-responsive-design` | Responsive Design | mobile-first media queries, hamburger meni bez JS-a |
| 05 | `05-css-variables-theming` | CSS varijable i teme | `:root`, custom properties, dark/light mode |
| 06 | `06-forms-validation` | Forme i validacija | HTML5 validacija, `:valid`/`:invalid`, Constraint Validation API |
| 07 | `07-dom-manipulation-todo` | DOM manipulacija | state → render pattern, event delegation, `localStorage` |
| 08 | `08-positioning-modal-dropdown` | CSS Positioning | `relative`/`absolute`/`fixed`/`sticky`, modal, dropdown |
| 09 | `09-transforms-hover-effects` | Transforms i hover efekti | `scale`/`rotate`/`translate`, zum efekat preko `overflow: hidden` |
| 10 | `10-fetch-api-async` | Fetch API i async/await | `fetch()`, `async/await`, loading/error/success stanja |

## Kako da koristiš ovo

1. Otvori bilo koji folder i dupli-klikni `index.html` (radi bez servera).
2. Pročitaj `README.md` unutar foldera — svaki ima objašnjenje koncepta i konkretne zadatke ("Šta da probaš") da uvežbaš gradivo umesto da samo gledaš gotov kod.
3. Otvori DevTools (F12) i menjaj CSS/JS uživo pre nego što praviš izmene u fajlu — brže učiš eksperimentisanjem.
4. Preporučeni redosled: 01 → 02 → 03 → 04 → 05 → 06 → 07 → 08 → 09 → 10 (ide od layout osnova ka interaktivnosti).

## Postavljanje na GitHub

```bash
cd web-design-learning
git init
git add .
git commit -m "Prvi commit: 10 primera za učenje web dizajna"
git branch -M main
git remote add origin <URL_TVOG_REPO_A>
git push -u origin main
```

### Bonus: besplatan hosting preko GitHub Pages
Repo → Settings → Pages → Branch: `main` → Save. Svaki folder će biti dostupan na `https://<korisnik>.github.io/<repo>/01-css-grid/`.

## Zahtevi
Samo moderan browser (Chrome, Firefox, Edge, Safari). Nema Node.js, nema paketa, nema build koraka.
