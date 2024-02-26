# API

Brukere må være registrerte for å bruke søkefunksjonen. Brukernavn må være unikt. Det kan opprettes flere brukere på samme e-post-addresse.

## /api/v1/search

Krever at brukeren logger inn med `Basic Auth` autentisering. Tar to argumenter i `GET`, begge argymentene er valgfrie:

* `from` Fra tidspunkt, hvis ikke valgt vil nå-tid bli brukt.
* `to` Til tidspunkt, hvis ikke valgt vil data for 7 dager bli vist. Hvis til-tidspunkt er før fratid, eller for langt fram i tid vil 7 dager bli vist.

## /api/v1/user/create

Opprett ny bryker. Tar følgende argumenter:

* `user`: Ønsket brukernavn
* `password`: Ønsket passord
* `email`: E-post for tilbakestilling av passord eller nyhetsbrev
* `phone`: Telefonnummer, valgfritt
* `newsletter`: 0 om nyhetsbrev ikke er ønsket, hvilket som helst annen tallverdi om nyhetsbrev er ønsket

## /api/v1/user/reset

Tilbakestille passord for bruker. Tar følgende argumenter:

* `user`: brukernavn for bruker som ønsker å tilbakestille passord
* `email`: epost-addresse registrert på bruker.

Hvis brukernavn og epost ikke stemmer vil henvendelsen bli avvist.

## /api/v1/user/login

Tester om brukernavn og passord stemmer, bruker `Basic Auth` i GET uten noen argumenter. Hvis brukernavn og passord stemmer får mann `HTTP STATUS 200`, eller `HTTP STATUS 401` for ugyldig bruker og/eller passord.

## /api/v1/username

Tester om brukernavn er ledig. Tar kun ett argument

* `user`: brukernavn som sjekkes

Alle sjekker returnerer `HTTP STATUS 200`. Levert JSON vil si `available` true om brukernavn er ledig, og false om brukernavn er i bruk.
