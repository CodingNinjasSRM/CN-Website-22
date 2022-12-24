import { Route, Routes } from "react-router-dom";
import { Canvas} from '@react-three/fiber'
import "./App.css";
import Chatbot from "./Components/Chatbot/Chatbot";
import Footer from "./Components/Footer/Footer";
import Landing from "./Components/Landing/Landing";
import Navbar from "./Components/Navbar/Navbar";
import Team from "./Components/Team/Team";
import Technical from "./Components/Technical/Technical";
import Nontechnical from "./Components/Nontechnical/Nontechnical";
import Events from './Components/Events/Events';
import Domains from "./Components/Domains/Domains";
import { motion} from 'framer-motion'
function App() {
  
  return (
    <div className="App">
     {/* <motion.div 
        initial={{ opacity: 0 }} whileInView={{opacity:1}}
        transition={{ delay: 8 }}
        > 
        <Navbar/>
     </motion.div> */}
        
     <motion.div 
        initial={{ opacity: 0 }} whileInView={{opacity:1}}
        transition={{ delay: 8 }}
        > 
        <Chatbot/>
     </motion.div>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="technical" element={<Technical />} />
        <Route path="nontechnical" element={<Nontechnical />} />
        <Route path="team" element={<Team />} />
        <Route path="events" element={<Events />} />
        <Route path="domains" element={<Domains/>} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
