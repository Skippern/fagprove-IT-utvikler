import {Link} from 'react-router-dom';
export default function GDPR() {
    return (
        <div>
            <p><Link to='/register'>Tilbake til registrering!</Link></p>
            <h1>GDPR</h1>
            <p>Her skal det st&aring; en slik lang juridisk tekst om hva GDPR er og hvorfor brukere m&aring; akseptere GDPR for &aring; bruke nettsiden. - Vi lagrer bare brukernavn, passord, og epost-addresse, og sporering ingen data om bruk eller slikt.</p>
            <h1>Brukerbetingelser</h1>
            <p>Her skal det st&aring; litt om hvilke betingelser vi (NFRI) setter for bruk av nettsiden</p>
            <h2>NASA</h2>
            <p>Her skal det st&aring; noe om hvordan NASA samler denne dataen og under hvilke betingelser de er gitt. For eksempel at dataen stammer fra <a href="http://neo.jpl.nasa.gov/">Astroide teamet p&aring; NASA JPL</a>.</p>
        </div>
    )
}