import { NavLink } from "react-router-dom";
import logoImg from "../assets/shared/logo.svg";

function Header(props) {
  const {
    burger,
    toggleBurger = Function.prototype,
    closeBurger = Function.prototype,
  } = props;

  return (
    <>
      <div className="header">
        <div className="header__content">
          <div className="header__logo">
            <img src={logoImg} alt="SpaceTurism" />
          </div>
          <div
            className={burger === true ? "burger close" : "burger"}
            onClick={toggleBurger}
          ></div>
          <div
            className={burger === true ? "header__nav active" : "header__nav"}
          >
            <span className="nav__item">
              <NavLink className="nav__link" to="/" onClick={closeBurger}>
                01 <span className="nav__txt">Home</span>
              </NavLink>
            </span>
            <span className="nav__item">
              <NavLink
                className="nav__link n11"
                to="/destination"
                onClick={closeBurger}
              >
                02 <span className="nav__txt">Destination</span>
              </NavLink>
            </span>
            <span className="nav__item">
              <NavLink className="nav__link" to="/crew" onClick={closeBurger}>
                03 <span className="nav__txt">Crew</span>
              </NavLink>
            </span>
            <span className="nav__item--last">
              <NavLink
                className="nav__link n10"
                to="/technology"
                onClick={closeBurger}
              >
                04 <span className="nav__txt"> Technology</span>
              </NavLink>
            </span>
          </div>
        </div>
      </div>
    </>
  );
}

export { Header };
