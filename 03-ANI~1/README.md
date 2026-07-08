# 03 · Animacije i tranzicije

Uči: `transition`, `@keyframes`, `animation`, `transform`, `perspective`, `backface-visibility`.

## Transition vs Animation — razlika
- `transition` animira promenu **između dva stanja** (npr. normalno → `:hover`). Treba okidač (hover, klik, promena klase).
- `animation` + `@keyframes` animira **samostalno**, u petlji ili jednom, bez potrebe za okidačem.

## Šta da probaš
1. U `.btn` promeni `transition: background-color .3s ease` u `2s` — uspori tranziciju i oseti razliku.
2. U `.spinner` promeni `linear` u `ease-in-out` i posmatraj kako rotacija ubrzava/usporava.
3. U `.flip-card` promeni `rotateY(180deg)` u `rotateX(180deg)` — flip će ići vertikalno umesto horizontalno.
4. Dodaj `animation-delay` na `.btn-pulse` da vidiš kako se pomera početak animacije.
