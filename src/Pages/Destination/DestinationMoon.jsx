import data from "../../moke/data.json";
import moonImg from "../../assets/destination/image-moon.png";

const DestinationMoon = () => {
  return (
    <div className="container">
      <div className="des__content">
        <div className="des__img">
          <div className="des__icon">
            <img src={moonImg} alt={moonImg} />
          </div>
        </div>
        <div className="description">
          <div className="des__maintitle">{data.destinations[0].name}</div>
          <div className="des__description">
            {data.destinations[0].description}
          </div>
          <div className="des__inf">
            <div className="des__distance">
              AVG. DISTANCE
              <span> {data.destinations[0].distance}</span>
            </div>
            <div className="des__time">
              EST. TRAVEL TIME
              <span> {data.destinations[0].travel}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export { DestinationMoon };
