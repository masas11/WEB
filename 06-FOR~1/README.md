# 06 · Forme i validacija

Uči: HTML5 validacione atribute (`required`, `type`, `minlength`), CSS `:valid`/`:invalid`, JS Constraint Validation API (`checkValidity`, `validity`).

## Šta da probaš
1. Pokušaj da pošalješ formu praznu — pojaviće se poruke greške ispod svakog polja.
2. Ukucaj email bez `@` i klikni negde drugde (blur) — polje pocrveni odmah, bez submit-a.
3. Dodaj novo polje, npr. "Broj telefona" sa `pattern="[0-9]{9,10}"`, i dodaj odgovarajuću poruku u `messageFor()`.
4. Probaj da isključiš JS i submit-uješ formu — HTML5 validacija i dalje radi sama (probaj u DevTools ugasiti JavaScript).
