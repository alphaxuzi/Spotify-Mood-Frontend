import "../Header/Header.css";
import avatarLogo from "../../assets/avatar.svg";

function Header() {
  return (
    <div className="header">
      <h1 className="header__text">Play your mood </h1>
      <div className="header__user_container">
        <button className="header__login">Login</button>
        <button className="header__register">Register</button>
        <img src={avatarLogo} alt="avatar" className="header__avatar" />
      </div>
    </div>
  );
}

export default Header;
