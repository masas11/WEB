# 07 · DOM manipulacija — To-Do lista

Uči: state → render pattern, `event delegation`, `localStorage`, `dataset`, template literals za HTML.

## Ključni koncept: State → Render
Umesto da ručno dodaješ/uklanjaš elemente iz DOM-a na svaki klik, držiš podatke u JS nizu (`todos`) i pozivaš `render()` koja *ponovo iscrta* ceo prikaz na osnovu tog niza. Ovo je isti mentalni model koji koriste React, Vue itd. — samo bez biblioteke.

## Šta da probaš
1. Dodaj polje za "prioritet" (nisko/srednje/visoko) svakom zadatku i prikaži ga bojom.
2. Dodaj dugme "Obriši sve završeno".
3. Dodaj drag & drop reorder (napredno — pogledaj `HTML5 Drag and Drop API`).
4. Zameni `list.innerHTML = ""` pristup pametnijim renderom koji ne briše/pravi ceo DOM iznova (hint: `diffing`).
