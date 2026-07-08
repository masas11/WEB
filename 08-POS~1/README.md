# 08 · CSS Positioning — dropdown i modal

Uči: `static`, `relative`, `absolute`, `fixed`, `sticky`, `z-index`, `inset`.

## Brzi podsetnik
- `static` — podrazumevano, position svojstva (top/left...) nemaju efekat.
- `relative` — pomera element u odnosu na NJEGOVU normalnu poziciju; i dalje zauzima svoj prostor; postaje "referentna tačka" za `absolute` decu.
- `absolute` — izlazi iz normalnog toka, pozicionira se u odnosu na najbližeg pretka koji NIJE `static`.
- `fixed` — pozicionira se u odnosu na ceo viewport (ekran), ignoriše skrol.
- `sticky` — hibrid: ponaša se kao `relative` dok ne dođe do zadate granice (npr. `top: 0`), pa se "zalepi".

## Šta da probaš
1. U `.dropdown` ukloni `position: relative` i vidi kako se meni pozicionira u odnosu na CEO body umesto na dugme.
2. Promeni `.sticky-header` `top: 0` u `top: 20px` i vidi razliku.
3. U modalu, ukloni `z-index: 100` i stavi neki drugi element sa višim z-index-om iznad — modal će biti "ispod" njega.
4. Dodaj animaciju pojavljivanja modala (`opacity` + `transition`) kombinujući sa `03-animations-transitions`.
