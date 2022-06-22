import { NavLink } from "react-router-dom";

function Header() {
  return (
    <div className="header unselectable">
      <div className="header__content">
        <div className="header__logo">
          <img src="./assets/shared/logo.svg" alt="SpaceTurism" />
        </div>
        <div className="header__nav">
          <span className="nav__item">
            <NavLink className="nav__link" to="/">
              01 <span className="nav__txt">Home</span>
            </NavLink>
          </span>
          <span className="nav__item">
            <NavLink className="nav__link" to="/destination/moon">
              02 <span className="nav__txt">Destination</span>
            </NavLink>
          </span>
          <span className="nav__item">
            <NavLink className="nav__link" to="/crew/comander">
              03 <span className="nav__txt">Crew</span>
            </NavLink>
          </span>
          <span className="nav__item--last">
            <NavLink className="nav__link" to="/technology/launch+vehicle">
              04 <span className="nav__txt"> Technology</span>
            </NavLink>
          </span>
        </div>
      </div>
    </div>
  );
}

export { Header };
