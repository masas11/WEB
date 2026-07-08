# 10 · Fetch API i async/await

Uči: `fetch()`, `async/await`, `try/catch/finally`, `response.ok`, prikazivanje loading/error/success stanja u UI-ju.

## Zašto ovo je važno
Skoro svaka realna web aplikacija u nekom trenutku poziva neki API. Ključna lekcija ovde NIJE samo "kako se zove fetch()", nego **kako pokriti sva tri stanja** mrežnog poziva u interfejsu: dok se čeka (loading), kad uspe (success), kad ne uspe (error). Početnici često zaborave error handling.

## Šta da probaš
1. Klikni "Simuliraj grešku" da vidiš kako izgleda error state.
2. Ugasi internet (ili DevTools → Network → Offline) i klikni "Učitaj korisnike" — vidi drugu vrstu greške.
3. Promeni `.slice(0, 5)` u `.slice(0, 10)` da prikažeš više korisnika.
4. Probaj isti obrazac (loading/error/success) sa drugim besplatnim API-jem, npr. `https://jsonplaceholder.typicode.com/posts`.
5. Napredno: dodaj dugme "Otkaži" koje koristi `AbortController` da prekine fetch u toku.
