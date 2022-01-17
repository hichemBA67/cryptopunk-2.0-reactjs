import "./Header.css";
import punkLogo from "../assets/header/cryptopunk-logo.png";

const Header = () => {
  return (
    <div className="header">
      <div className="logoContainer">
        <img src={punkLogo} className="punkLogo" alt="" />
      </div>

      <div className="searchBar">
        <div className="searchIcon">
          <input type="text" />
        </div>
      </div>
    </div>
  );
};

export default Header;