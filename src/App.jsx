import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css";
import Header from "./assets/Components/header.jsx";
import Escocia from "./assets/Components/Escocia.jsx";
import GrandCanyon from "./assets/Components/Grand_Canyon.jsx";
import Muralhas_China from "./assets/Components/Muralhas_China.jsx";
import Aruba from "./assets/Components/Aruba.jsx";
import Katimandu from "./assets/Components/Katimandu.jsx";
import Home from "./assets/Components/Home.jsx";
import Footer from "./assets/Components/Footer.jsx";
function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Escocia" element={<Escocia />} />
          <Route path="/GrandCanyon" element={<GrandCanyon />} />
          <Route path="/Muralhas_China" element={<Muralhas_China />} />
          <Route path="/Aruba" element={<Aruba />} />
          <Route path="/Katimandu" element={<Katimandu />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
