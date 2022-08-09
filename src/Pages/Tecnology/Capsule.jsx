import data from "../../moke/data.json";
import CapsuleImg from "../../assets/technology/image-space-capsule-portrait.jpg";
import CapsulMobImg from "../../assets/technology/image-space-capsule-landscape.jpg";

const Capsule = () => {
  return (
    <div className="container">
      <div className="tec__content">
        <div className="tec__img">
          <picture>
            <source media="(max-width:912px)" srcSet={CapsulMobImg} />
            <img src={CapsuleImg} alt={CapsuleImg} style={{ width: "auto" }} />
          </picture>
        </div>
        <div className="tec__inf">
          <div className="tec__terminology">the terminology...</div>
          <div className="tec__name">{data.technology[2].name}</div>
          <div className="tec__description">
            {data.technology[2].description}
          </div>
        </div>
      </div>
    </div>
  );
};

export { Capsule };
