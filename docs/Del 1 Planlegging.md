# Oppgave

Det skal utarbeides en web-app frontend for sporing av astroider, et backend for å håndtere brukere og innloggingsdata, og et bibliotek for node.js. Frontend og bibliotek i henhold til spesifikasjoner fra kunde, backend for å løse oppgaven som bestilt fra kunde.

## Frontend

Her vil jeg velge React.TS, det gir meg tilgang på rammeverktøy som løser kundens ønsker, og løsningen kan bygges uten for mye tidsbruk.

## Backend

Her vil jeg velge Python med FLASK som rammeverk, da det ser ut til enkelt å la meg gi response som JSON. Jeg setter opp en enkel database for backend, som skal håndtere brukerdata og cache data fra NASA. Database endpoint blir konfigurerbart.

## Bibliotek

Biblioteket vil bli skrevet i TypeScript, med en build instruksjon for å generere en index.js som kunden kan bruke i sine prosjekter. Biblioteket skal enkelt kontakte backend og lever JSON

## Framdriftsplan

* Oppstart av backend og opprettelse av database, blir gjort første dag for å starte prosjektet. Regnes som del av oppstart og forberedelser på dag 1.
* Backend: Jeg regner med å bruke 2 til 3 dager på Backend. Hovedfunksjonene i Backend bør være klare i løpet av 1 dag.
* Bibliotek: Siden utgangspunktet for biblioteket er ganske enkelt vil jeg regne maksimalt 1 dag på dette. Frontend må være på plass før dette kan gjøres.
* Frontend: 2 dager, delvis i paralell med Backend, men en del av backend må være på plass innen jeg starter på dette.
* Dokumentasjon: Skrives fortløpende i `.md`-filer opprettet for hver underdel av prosjektet. `Frontend.md` og `Bibliotek.md` er ment som brukerstøttende dokumentasjon. `API.md` og `Backend.md` er ment for utviklere. Tidsbruk for dokumentasjon blir regnet inn i utvikling av de aktuelle komponentene

## QA

Når fungerende backend og frontend er opprettet kan jeg be kolleger i Advanz prøve å opprette bruker på frontend, sjekke etter astroider, innlogging av eksisterende bruker, og opprette nytt passord. Dette for å sikre at funksjonene virker som forventet.

## Teknologi og rammeverktøy

React.TS for frontend, TypeScript for bibliotek, og Python FLASK for backend. Database i Docker-container under utviklingen av prosjektet.

* Python: Er vant til språket
  * FLASK: Godt dokumentert rammerverktøy med god tilgang til støtteresurser.
* Typescript: Har kjennskap til språket og mer komfortabel i å bruke det sammenlignet med JavaScript
  * React.TS: TypeScript versjon av React.JS, tillater rask bygging av fungerende frontend.
* Docker: Andre teknologier tilknyttet prosjektet settes opp i Docker (for eksempel, database)
* Installasjon/Implementering: Installasjonsinstruksjoner forutsetter tilgang på Linux server, enten fysisk server, virtuell maskin, eller som Docker container. Utviklingen skjer på Linux-basert maskin.

## Dokumentering

Støttedokumenter blir lagt ved i `docs/`-mappe i kode-repositoriet, inkludert denne planen.

Koden er tilgjentelig på [GitHub](https://github.com/Skippern/fagprove-IT-utvikler).
