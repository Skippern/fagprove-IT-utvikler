# Installasjon

Her kommer en liten rekke med instruksjoner i forbindelse med installasjon

For enklest bruk forutsetter jeg bruk av `docker-compose`, start tjenesten med `docker-compose up`. Frontend er eksponert på port `3000` og backend på port `4000`. Database er tilgjengelig fra server med IP-addressen gitt av Docker, se instruksjon om database.

## Database

Ved første oppstart av `docker-compose up` starter databasen tom. Du må da logge inn med `mysql -u root -p --host=172.23.0.3` og passord `fagprove`. Bruk `docker network inspect fagprove-it-utvikler_default` for å finne riktig IP-addresse til `fagprove-it-utvikler_db_1`. Kopier `db/install.txt` og lim inn i `mysql>`. Dette vil opprette riktige brukere og databaser i henhold til `backend/config.json`. Hvis annet database-navn, brukernavn, eller lignende brukes, endre feltene i `backend/config.json` tilsvarende. Restart docker for at backend skal få kontakt med gjeldende database.

## Backend

Alle punkter for oppsett er lagt i `backend/config.json`.

* `nasa_api_key` er API-nøkkel fra NASA
* `db`* er konfigurasjoner for database, ferdig satt opp for bruk med `docker-compose`. Feltnavn er selvbeskrivende
* `mail`* er konfigurasjon for e-post server. Feltnavn er slevbeskrivende

Start backend med `flask run --host=0.0.0.0` eller som docker

## Bibliotek

Kopier `NfriApi.js` inn i ditt prosjekt og last det inn i prosjektet som du pleier

## Frontend

Forsikre deg om at `public/config.json` peker til riktig addresse for Backend (ekstern addresse). Forsikre deg om at addressen slutter med `/api/v1`.
Start frontend med `npm start` eller som docker
