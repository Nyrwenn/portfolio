import "../style/header.scss";
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <div className="header_wrapper">
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
