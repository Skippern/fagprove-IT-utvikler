import LoginImage from "./LoginImage";
import LoginMenu from "./LoginMenu";

export default function Login() {
    return (
        <div className="login-grid">
            <LoginImage/>
            <div className="login-grid-menu"><LoginMenu/></div>
        </div>
    )
}
