# Egenvurdering

Tenkte i begynnelsen å cache data fra NASA i lokal database, men slo fra meg denne ideen så fort jeg begynte å sette opp selve backend. Tenkte også å bruke en tabell for session-data, men valgte å bruke BasicAuth til all innloggingskontroll.

Det er bare to API-funksjoner som bruker BasicAuth, det er `/api/v1/login` og `/api/v1/search`. Andre funksjoner kontrollerer om data er tillatt mot database uten autentisering.

Backend er skrevet for å ta data med HTTP GET kall, selv om jeg ville brukt HTTP POST for å opprette ny bruker. Dette vil jeg rette på hvis jeg har tid mot slutten.

Oppdaget da jeg begynte å jobbe med frontend at jeg trengte CORS støtte i backend, og la til dette.

Ved arbeid på objekt-tabellen i frontend oppdaget jeg manglende felt i backend, dette var enkelt å legge til.

Hadde problemer med tabellene og diagrammene i frontend. Etter mye streving med React-komponentene valgte jeg å løse dette med `HTML Tabell` for søylediagram, og `div` felt komponent med `span` og `css` offset for scatterdiagram.

Debugget Flask-Mail til det punkt at jeg ikke får noen feilmeldinger.

Debugget biblioteket i den utstrekning jeg kan innenfor tidsrammen, det vanskelige med dette er at jeg ikke har noen nevneverdig Node.JS erfaring før fagprøven.

På det stadiet prosjektet er nå ville jeg fått design/frontend/UI/UX medarbeidere til å polere på frontend, og medarbeidere erfarne me Node.JS for å finalisere biblioteket. Her ville jeg også kontaktet kunde for publisering av test server som kan settes i produksjon når kunden er fornøyd.
