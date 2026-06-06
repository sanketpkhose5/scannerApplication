import headerImage from "../../assets/images/header-mobile.png";
import "./Header.css";

function Header() {
  return (
    <header className="header">
      <img
        src={headerImage}
        alt="Header"
        className="header-image"
      />
    </header>
  );
}

export default Header;