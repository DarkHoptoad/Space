import data from "../../moke/data.json";
import europaImg from "../../assets/destination/image-europa.png";

const DestinationEuropa = () => {
  return (
    <div className="container">
      <div className="des__content">
        <div className="des__img">
          <div className="des__icon">
            <img src={europaImg} alt={europaImg} />
          </div>
        </div>
        <div className="description">
          <div className="des__maintitle">{data.destinations[2].name}</div>
          <div className="des__description">
            {data.destinations[2].description}
          </div>
          <div className="des__inf">
            <div className="des__distance">
              AVG. DISTANCE
              <span> {data.destinations[2].distance}</span>
            </div>
            <div className="des__time">
              EST. TRAVEL TIME
              <span> {data.destinations[2].travel}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export { DestinationEuropa };
