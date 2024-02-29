import LoginImage from "./LoginImage";
import RegisterMenu from "./RegisterMenu";

export default function Register() {
    return (
        <div className="login-grid">
            <LoginImage/>
            <div className="login-grid-menu"><RegisterMenu/></div>
        </div>
    )
}