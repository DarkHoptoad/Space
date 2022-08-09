import data from "../../moke/data.json";
import EngineerImg from "../../assets/crew/image-anousheh-ansari.png";

function CrewEngineer() {
  return (
    <div className="crew__content">
      <div className="crew__img">
        <img src={EngineerImg} alt={EngineerImg} />
      </div>
      <div className="crew__description eng">
        <div className="crew__maintitle">{data.crew[3].role}</div>
        <div className="crew__name">{data.crew[3].name}</div>
        <div className="crew__bio">{data.crew[3].bio}</div>
      </div>
    </div>
  );
}

export { CrewEngineer };
