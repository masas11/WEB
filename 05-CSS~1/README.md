# 05 · CSS Variables (Custom Properties) + Theming

Uči: `:root`, `var(--ime)`, prepisivanje varijabli preko atributa (`[data-theme="dark"]`), `localStorage`.

## Zašto ovo je bolje od dva odvojena stylesheeta
Umesto da praviš `light.css` i `dark.css`, definišeš JEDAN set pravila koji koristi `var(--boja)`. Menjaš samo vrednosti varijabli na jednom mestu (`:root` vs `[data-theme="dark"]`), a sav ostatak CSS-a (layout, razmaci, fontovi) ostaje isti.

## Šta da probaš
1. Dodaj treću temu, npr. `[data-theme="sepia"]`, sa toplim bojama, i dugme koje je bira.
2. Dodaj novu varijablu `--radius: 12px` i koristi je u `border-radius` na više mesta.
3. Otvori DevTools konzolu i otkucaj `localStorage.getItem("theme")` da vidiš da je izbor zapamćen.
4. Probaj `prefers-color-scheme` media query da automatski postaviš temu prema sistemskim podešavanjima korisnika.
