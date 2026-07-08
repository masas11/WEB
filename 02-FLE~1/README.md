# 02 · Flexbox

Uči: `display: flex`, `justify-content`, `align-items`, `flex-wrap`, `flex` shorthand, `order`.

## Šta da probaš
1. U `.navbar` promeni `justify-content: space-between` u `center` ili `flex-end`.
2. U `.cards` ukloni `flex-wrap: wrap` i vidi kako se kartice sažimaju umesto da padaju u novi red.
3. Promeni `flex: 1 1 150px` u `.card` na `flex: 0 0 150px` — kartice više neće rasti da popune prostor.
4. Zameni vrednosti `order` u poslednjem primeru i posmatraj kako se menja vizuelni redosled bez menjanja HTML-a.

## Kad koristiti šta
Flexbox = raspored u jednom pravcu (red ili kolona): navbar, dugmad, kartice u nizu.
Grid = raspored u dva pravca istovremeno: cela stranica, kompleksni layouti. Vidi `01-css-grid`.
