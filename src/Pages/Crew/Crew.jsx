import { Outlet, NavLink } from "react-router-dom";
const Crew = (props) => {
  const { burger } = props;

  return (
    <div className="crew__page">
      <div className="container">
        <span className="crew__title">
          <span className="des__letters">02</span> Meet your crew
        </span>
        <div className={burger === true ? "crew__links z" : "crew__links"}>
          <NavLink to="comander" className="des__link crew">
            Comander
          </NavLink>
          <NavLink to="specialist" className="des__link crew">
            Specialist
          </NavLink>
          <NavLink to="pilot" className="des__link crew">
            Pilot
          </NavLink>
          <NavLink to="engineer" className="des__link crew">
            Engineer
          </NavLink>
        </div>
        <Outlet />
      </div>
    </div>
  );
};

export { Crew };
