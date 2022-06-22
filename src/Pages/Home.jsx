import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="homepage ">
      <div className="container">
        <div className="home__content">
          <div className="home__subtitle">
            <span className="home-subtitle">So, you want to travel to</span>
          </div>
          <div className="homе__title">
            <span className="home--title">Space</span>
          </div>
          <div className="home__text">
            <span className="home--text">
              Let’s face it; if you want to go to space, you might as well
              genuinely go to outer space and not hover kind of on the edge of
              it. Well sit back, and relax because we’ll give you a truly out of
              this world experience!
            </span>
          </div>
        </div>
      </div>
      <Link className="home__button" to="/destination/moon">
        <button className="home--button">Explore</button>
      </Link>
    </div>
  );
};

export { Home };
