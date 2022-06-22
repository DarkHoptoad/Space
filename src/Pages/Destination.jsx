import data from "../moke/data.json";

const Destination = () => {
  return (
    <div className="destination__page">
      <div className="container">
        <div className="des__content">
          <div className="des__img">
            <span className="des__title">
              <span className="des__letters">01</span> Pick your destination
            </span>
            <div className="des__icon">
              <img src="../../public/assets/destination/image-moon.png" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export { Destination };
