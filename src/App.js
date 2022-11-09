import { Route, Routes } from "react-router-dom";
import "./App.css";
import Chatbot from "./Components/Chatbot/Chatbot";
import Corporate from "./Components/Corporate/Corporate";
import Creatives from "./Components/Creatives/Creatives";
import Footer from "./Components/Footer/Footer";
import Landing from "./Components/Landing/Landing";
import Navbar from "./Components/Navbar/Navbar";
import Team from "./Components/Team/Team";
import Technical from "./Components/Technical/Technical";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Chatbot />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="technical" element={<Technical />} />
        <Route path="corporate" element={<Corporate />} />
        <Route path="creative" element={<Creatives />} />
        <Route path="team" element={<Team />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
