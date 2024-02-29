import LoginImage from "./LoginImage";
import ResetMenu from "./ResetMenu";

export default function Reset() {
    return (
        <div className="login-grid">
            <LoginImage/>
            <div className="login-grid-menu"><ResetMenu/></div>
        </div>
    )
}