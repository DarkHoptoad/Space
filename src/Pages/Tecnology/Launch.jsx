import data from "../../moke/data.json";
import launchImg from "../../assets/technology/image-launch-vehicle-portrait.jpg";
import launchMobImg from "../../assets/technology/image-launch-vehicle-landscape.jpg";

const Launch = () => {
  return (
    <div className="container">
      <div className="tec__content">
        <div className="tec__img">
          <picture>
            <source media="(max-width:912px)" srcSet={launchMobImg} />
            <img src={launchImg} alt={launchImg} style={{ width: "auto" }} />
          </picture>
        </div>
        <div className="tec__inf">
          <div className="tec__terminology">the terminology...</div>
          <div className="tec__name">{data.technology[0].name}</div>
          <div className="tec__description">
            {data.technology[0].description}
          </div>
        </div>
      </div>
    </div>
  );
};

export { Launch };
