import { Route, Routes } from "react-router-dom";
import "./App.css";
import Chatbot from "./Components/Chatbot/Chatbot";
import Footer from "./Components/Footer/Footer";
import Landing from "./Components/Landing/Landing";
import Navbar from "./Components/Navbar/Navbar";
import Team from "./Components/Team/Team";
import Technical from "./Components/Technical/Technical";
import Nontechnical from "./Components/Nontechnical/Nontechnical";
import Events from "./Components/Events/Events";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Chatbot />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="technical" element={<Technical />} />
        <Route path="nontechnical" element={<Nontechnical />} />
        <Route path="team" element={<Team />} />
        <Route path="events" element={<Events />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
