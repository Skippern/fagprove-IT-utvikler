import { Link } from 'react-router-dom'

export default function LoginMenu() {
    return (
        <div>
            <div>Top - Logo her</div>
            <div>Velkommen eller noe s&aring;nt</div>
            <div>
                <input name="username" placeholder="Brukernavn"/>
                <input type='password' name='password' placeholder="Passord"/>
                <input type='checkbox' /> Husk meg
                <button>Logg inn</button>
            </div>
            <div>
                <Link to='/forgotten'>Glemt passord?</Link>
            </div><div>
                <Link to='/register'>Ikke registrert?</Link>
            </div>
        </div>
    )
}