import data from "../../moke/data.json";
import titanImg from "../../assets/destination/image-titan.png";

const DestinationTitan = () => {
  return (
    <div className="container">
      <div className="des__content">
        <div className="des__img">
          <div className="des__icon">
            <img src={titanImg} alt={titanImg} />
          </div>
        </div>
        <div className="description">
          <div className="des__maintitle">{data.destinations[3].name}</div>
          <div className="des__description">
            {data.destinations[3].description}
          </div>
          <div className="des__inf">
            <div className="des__distance">
              AVG. DISTANCE
              <span> {data.destinations[3].distance}</span>
            </div>
            <div className="des__time">
              EST. TRAVEL TIME
              <span> {data.destinations[3].travel}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export { DestinationTitan };
