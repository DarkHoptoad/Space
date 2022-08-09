import data from "../../moke/data.json";
import specialistImg from "../../assets/crew/image-mark-shuttleworth.png";

function CrewSpecialist() {
  return (
    <div className="crew__content">
      <div className="crew__img">
        <img src={specialistImg} alt={specialistImg} />
      </div>
      <div className="crew__description spec">
        <div className="crew__maintitle">{data.crew[1].role}</div>
        <div className="crew__name">{data.crew[1].name}</div>
        <div className="crew__bio">{data.crew[1].bio}</div>
      </div>
    </div>
  );
}

export { CrewSpecialist };
