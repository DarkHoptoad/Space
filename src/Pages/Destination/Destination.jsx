import { Outlet, NavLink } from "react-router-dom";

function Destination(props) {
  const { burger } = props;

  return (
    <div className="destination__page">
      <span className="des__title">
        <span className="des__letters">01</span> Pick your destination
      </span>
      <div className={burger === true ? "des__links z" : "des__links"}>
        <NavLink to="moon" className="des__link">
          Moon
        </NavLink>
        <NavLink to="mars" className="des__link">
          Mars
        </NavLink>
        <NavLink to="europa" className="des__link">
          Europa
        </NavLink>
        <NavLink to="titan" className="des__link">
          Titan
        </NavLink>
      </div>
      <Outlet />
    </div>
  );
}

export { Destination };
