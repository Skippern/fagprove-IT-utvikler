import { Link } from 'react-router-dom'

export default function RegisterMenu() {
    return (
        <div>
            <div><Link to='/login'><button>&lt;</button></Link>Top - Logo her</div>
            <div>Registrer deg!</div>
            <div>Registreringsbox</div>
        </div>
    )
}