import data from "../../moke/data.json";
import pilotImg from "../../assets/crew/image-victor-glover.png";

function CrewPilot() {
  return (
    <div className="crew__content">
      <div className="crew__img">
        <img src={pilotImg} alt={pilotImg} />
      </div>
      <div className="crew__description pil">
        <div className="crew__maintitle">{data.crew[2].role}</div>
        <div className="crew__name">{data.crew[2].name}</div>
        <div className="crew__bio">{data.crew[2].bio}</div>
      </div>
    </div>
  );
}

export { CrewPilot };
