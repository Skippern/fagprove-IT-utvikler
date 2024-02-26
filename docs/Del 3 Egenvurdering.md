# Egenvurdering

Tenkte i begynnelsen å cache data fra NASA i lokal database, men slo fra meg denne ideen så fort jeg begynte å sette opp selve backend. Tenkte også å bruke en tabell for session-data, men valgte å bruke BasicAuth til all innloggingskontroll.

Det er bare to API-funksjoner som bruker BasicAuth, det er `/api/v1/login` og `/api/v1/search`. Andre funksjoner kontrollerer om data er tillatt mot database uten autentisering.

Backend er skrevet for å ta data med HTTP GET kall, selv om jeg ville brukt HTTP POST for å opprette ny bruker. Dette vil jeg rette på hvis jeg har tid mot slutten.
