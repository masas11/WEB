# 01 · CSS Grid Layout

Uči: `display: grid`, `grid-template-columns`, `repeat()`, `auto-fit` + `minmax()`, `grid-template-areas`, `gap`.

## Šta da probaš
1. Otvori `index.html` u browseru i skupi/proširi prozor — prati kako se galerija sama reorganizuje.
2. U `.gallery` promeni `minmax(120px, 1fr)` u `minmax(250px, 1fr)` i vidi kako se menja broj kolona.
3. U `.page-layout` promeni raspored u `grid-template-areas` (npr. stavi sidebar desno) i osveži stranicu.
4. Dodaj treću kolonu (npr. "aside2") u layout i poveži je u `grid-template-areas`.

## Ključna razlika Grid vs Flexbox
Grid je 2D (redovi i kolone istovremeno), Flexbox je 1D (jedan pravac). Za cele layoute stranice koristi Grid, za raspored elemenata unutar jedne linije (navbar, dugmad) koristi Flexbox — vidi folder `02-flexbox`.
