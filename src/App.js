import { Route, Routes } from "react-router-dom";
import { Header } from "./Layout/Header";
import { Crew } from "./Pages/Crew";
import { Destination } from "./Pages/Destination";
import { Home } from "./Pages/Home";
import { Technology } from "./Pages/Technology";

function App() {
  return (
    <>
      <Header />
      <div className="page">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/destination/moon" element={<Destination />} />
          <Route path="/crew/comander" element={<Crew />} />
          <Route path="/technology/launch+vehicle" element={<Technology />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
