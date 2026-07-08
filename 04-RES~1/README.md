# 04 · Responsive Design (mobile-first)

Uči: `meta viewport`, mobile-first media queries (`min-width`), hamburger meni bez JS-a (checkbox hack), responsive grid.

## Zašto mobile-first?
Pišeš osnovne stilove za najmanji ekran, pa DODAJEŠ pravila za veće ekrane preko `@media (min-width: ...)`. Ovo je lakše za održavanje nego suprotan pristup (desktop-first sa `max-width`), jer se manje "poništavaju" stilovi.

## Šta da probaš
1. Otvori `index.html`, otvori DevTools (F12) → Toggle device toolbar i probaj razne veličine ekrana.
2. Promeni breakpoint sa `768px` na `600px` i vidi na kojoj širini se sad prelama meni.
3. Dodaj treći breakpoint za velike monitore (npr. `min-width: 1400px`) i promeni grid na 4 kolone.
4. Checkbox hack (`.menu-toggle`) je trik bez JavaScripta — probaj da isti efekat napraviš sa JS-om (`classList.toggle`), kao u primeru `07-dom-manipulation-todo`.
