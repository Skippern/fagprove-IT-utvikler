# Frontend

Frontend er skrevet i React.TS og er satt opp med `react-router-dom` for routing og navigasjon. Du blir først sendt til en innloggings-side, før du kommer til søket.

Du kan "lure" frontend med direktelink til søket, men vil få feilmelding når du søker.

Innlogging blir håndtert av Cookies, med 7 dager levetid. Jeg ville endret dette til noe relatert rundt session data, tokens, og/eller OAuth for best practice.

Frontend har samme begrensninger som NASA sin søkemotor med tanke på dato. DVS hvis Sluttdato er utenfor søkebegrensningen eller ikke lagt til vil søket gi 7 dager data.
