import data from "../../moke/data.json";
import marsImg from "../../assets/destination/image-mars.png";

const DestinationMars = () => {
  return (
    <div className="container">
      <div className="des__content">
        <div className="des__img">
          <div className="des__icon">
            <img src={marsImg} alt={marsImg} />
          </div>
        </div>
        <div className="description">
          <div className="des__maintitle">{data.destinations[1].name}</div>
          <div className="des__description">
            {data.destinations[1].description}
          </div>
          <div className="des__inf">
            <div className="des__distance">
              AVG. DISTANCE
              <span> {data.destinations[1].distance}</span>
            </div>
            <div className="des__time">
              EST. TRAVEL TIME
              <span> {data.destinations[1].travel}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export { DestinationMars };
