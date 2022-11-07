import "../style/header.scss";
import { NavLink, Link } from "react-router-dom";
import kodama from "../images/logo-kodama-2-png-white.png";

function Header(props) {
  const { isHomePage } = props;
  return (
    <div className="header_wrapper">
      <Link to="/">
        <img
          src={kodama}
          alt="logo Kodama"
          className="mini_logo"
          style={{ display: isHomePage ? "none" : "block" }}
        />
      </Link>
      <header>
        <nav>
          <NavLink className="links" to="/portfolio">
            Portfolio
          </NavLink>
          <NavLink className="links" to="/about">
            Présentation
          </NavLink>
          <NavLink className="links" to="/contact">
            Contact
          </NavLink>
        </nav>
      </header>
    </div>
  );
}

export default Header;
