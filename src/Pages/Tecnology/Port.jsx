import data from "../../moke/data.json";
import PortImg from "../../assets/technology/image-spaceport-portrait.jpg";
import PortMobImg from "../../assets/technology/image-spaceport-landscape.jpg";

const Port = () => {
  return (
    <div className="container">
      <div className="tec__content">
        <div className="tec__img">
          <picture>
            <source media="(max-width:912px)" srcSet={PortMobImg} />
            <img src={PortImg} alt={PortImg} style={{ width: "auto" }} />
          </picture>
        </div>
        <div className="tec__inf">
          <div className="tec__terminology">the terminology...</div>
          <div className="tec__name">{data.technology[1].name}</div>
          <div className="tec__description">
            {data.technology[1].description}
          </div>
        </div>
      </div>
    </div>
  );
};

export { Port };
