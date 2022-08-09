import { Outlet, NavLink } from "react-router-dom";

const Technology = (props) => {
  const { burger } = props;

  return (
    <div className="tecnology__page">
      <span className="des__title">
        <span className="des__letters">03</span> Space launch 101
      </span>
      <div className={burger === true ? "dots z" : "dots"}>
        <div className="dots__item">
          <NavLink to="launch" className="dots__num">
            1
          </NavLink>
        </div>
        <div className="dots__item">
          <NavLink to="port" className="dots__num">
            2
          </NavLink>
        </div>
        <div className="dots__item">
          <NavLink to="capsule" className="dots__num">
            3
          </NavLink>
        </div>
      </div>
      <Outlet />
    </div>
  );
};

export { Technology };
