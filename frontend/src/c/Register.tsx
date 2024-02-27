import RegisterMenu from "./RegisterMenu";

export default function Register() {
    return (
        <div className="login-grid">
            <div className="login-grid-image"><img src="img/login.jpg" alt="Space!" /></div>
            <div className="login-grid-menu"><RegisterMenu/></div>
        </div>
    )
}