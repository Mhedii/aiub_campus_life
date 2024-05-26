import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home";
import Activities from "./Pages/Activities";
import Clubs from "./Pages/Clubs";
import Facilities from "./Pages/Facilities";
import Contact from "./Pages/Contact";
import SingleActivity from "./components/Activities/SingleActivity";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/activities" element={<Activities />} />
        <Route path="/activities/:id" element={<SingleActivity />} />
        <Route path="/clubs" element={<Clubs />} />
        <Route path="/facilities" element={<Facilities />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
