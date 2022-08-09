import { Route, Routes } from "react-router-dom";
import { Header } from "./Layout/Header";
import { Crew } from "./Pages/Crew/Crew";
import { Home } from "./Pages/Home";
import { Technology } from "./Pages/Tecnology/Technology";
import { DestinationMars } from "./Pages/Destination/DestinationMars";
import { DestinationMoon } from "./Pages/Destination/DestinationMoon";
import { DestinationEuropa } from "./Pages/Destination/DestinationEuropa";
import { DestinationTitan } from "./Pages/Destination/DestinationTitan";
import { Nothing } from "./Pages/Nothing";
import { Destination } from "./Pages/Destination/Destination";
import { CrewComander } from "./Pages/Crew/CrewComander";
import { CrewSpecialist } from "./Pages/Crew/CrewSpecialist";
import { CrewPilot } from "./Pages/Crew/CrewPilot";
import { CrewEngineer } from "./Pages/Crew/CrewEngineer";
import { Launch } from "./Pages/Tecnology/Launch";
import { Port } from "./Pages/Tecnology/Port";
import { Capsule } from "./Pages/Tecnology/Capsule";
import { useState } from "react";

function App() {
  const [burger, setBurger] = useState(false);

  const toggleBurger = () => {
    setBurger(!burger);
  };

  const closeBurger = () => {
    setBurger(false);
  };
  return (
    <>
      <Header
        toggleBurger={toggleBurger}
        burger={burger}
        closeBurger={closeBurger}
      />
      <div className="page">
        <Routes>
          <Route path="/" element={<Home burger={burger} />} />
          <Route
            path="/destination/*"
            element={<Destination burger={burger} />}
          >
            <Route path="moon" element={<DestinationMoon />} />
            <Route path="mars" element={<DestinationMars />} />
            <Route path="europa" element={<DestinationEuropa />} />
            <Route path="titan" element={<DestinationTitan />} />
          </Route>
          <Route path="/crew/*" element={<Crew burger={burger} />}>
            <Route path="comander" element={<CrewComander />} />
            <Route path="specialist" element={<CrewSpecialist />} />
            <Route path="pilot" element={<CrewPilot />} />
            <Route path="engineer" element={<CrewEngineer />} />
          </Route>
          <Route path="/technology/*" element={<Technology burger={burger} />}>
            <Route path="launch" element={<Launch />} />
            <Route path="port" element={<Port />} />
            <Route path="capsule" element={<Capsule />} />
          </Route>
          <Route path="*" element={<Nothing />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
