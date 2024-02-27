import LoginMenu from "./LoginMenu";

export default function Login() {
    return (
        <div className="login-grid">
            <div className="login-grid-image"><img src="img/login.jpg" alt="Space!" /></div>
            <div className="login-grid-menu"><LoginMenu/></div>
        </div>
    )
}
