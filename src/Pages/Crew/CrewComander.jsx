import data from "../../moke/data.json";
import comanderImg from "../../assets/crew/image-douglas-hurley.png";

function CrewComander() {
  return (
    <div className="crew__content">
      <div className="crew__comimg">
        <img src={comanderImg} alt={comanderImg} />
      </div>
      <div className="crew__description">
        <div className="crew__maintitle">{data.crew[0].role}</div>
        <div className="crew__name">{data.crew[0].name}</div>
        <div className="crew__bio">{data.crew[0].bio}</div>
      </div>
    </div>
  );
}

export { CrewComander };
