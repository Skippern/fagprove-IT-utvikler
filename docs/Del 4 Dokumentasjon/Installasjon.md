# Installasjon

Her kommer en liten rekke med instruksjoner i forbindelse med installasjon

For enklest bruk forutsetter jeg bruk av `docker-compose`, start tjenesten med `docker-compose up`. Frontend er eksponert på port `3000` og backend på port `4000`. Database er tilgjengelig fra server med IP-addressen gitt av Docker, se instruksjon om database.

## Database

Maa finne en løsning paa automatisk oppsett av database, alternativet er å logge inn med `mysql -u root -p --host=172.23.0.3` og passord `fagprove`. Bruk `docker network inspect fagprove-it-utvikler_default` for å finne riktig IP-addresse til `fagprove-it-utvikler_db_1`. Kopier `db/install.txt` og lim inn i `mysql>`. Dette vil opprette riktige brukere og databaser i henhold til `backend/config.json`. Hvis annet database-navn, brukernavn, eller lignende brukes, endre feltene i `backend/config.json` tilsvarende.

## Backend

Alle punkter for oppsett er lagt i `backend/config.json`.

* `nasa_api_key` er API-nøkkel fra NASA
* `db`* er konfigurasjoner for database, ferdig satt opp for bruk med `docker-compose`. Feltnavn er selvbeskrivende
* `mail`* er konfigurasjon for e-post server. Feltnavn er slevbeskrivende

## Bibliotek

Ikke enda

## Frontend

Ikke noe enda
