# 09 · CSS Transforms i hover efekti

Uči: `transform` (`scale`, `rotate`, `translate`, `skew`), kombinovanje transforma sa `box-shadow`, trik "zumiranje unutar okvira" preko `overflow: hidden`.

## Zašto transform umesto width/margin?
`transform` ne utiče na layout ostalih elemenata (radi na "compositor" nivou u browseru), pa je glatkiji i performantniji za animacije. Menjanje `width`/`margin`/`top` tera browser da ponovo računa layout cele stranice (reflow) — sporije i "trzavo".

## Šta da probaš
1. U `.fancy-card-inner` promeni `scale(1.02)` u `scale(1.1)` — vidi kako prevelik scale deluje neprirodno.
2. Kombinuj dva transforma u jedan: `transform: rotate(5deg) scale(1.1)` — redosled utiče na rezultat, probaj obrnuto.
3. U `.img-frame` promeni `overflow: hidden` u `visible` da vidiš zašto je taj trik neophodan za zum efekat.
4. Dodaj `transform-origin: top left` na `.rotate-hover` i uporedi sa podrazumevanim (centar).
