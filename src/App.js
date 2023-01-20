// import { Canvas } from "@react-three/fiber";
import { motion } from "framer-motion";
import { Route, Routes /* , useLocation */ } from "react-router-dom";
import "./App.css";
import Chatbot from "./Components/Chatbot/Chatbot";
import Domainspage from "./Components/Domains/Components/Domainspage";
import Domains from "./Components/Domains/Domains";
import Events from "./Components/Events/Events";
import Footer from "./Components/Footer/Footer";
import FooterMin from "./Components/FooterMin/FooterMin";
import Landing from "./Components/Landing/Landing";
import Navbar from "./Components/Navbar/Navbar";
import Nontechnical from "./Components/Nontechnical/Nontechnical";
import Team from "./Components/Team/Team";
import Technical from "./Components/Technical/Technical";
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
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 8 }}
      >
        <Chatbot />
      </motion.div>
      {/* <Navbar /> */}
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Navbar />
              <Landing />
              <Footer />
            </>
          }
        />
        <Route
          path="technical"
          element={
            <>
              <Navbar />
              <Technical />
              <FooterMin />
            </>
          }
        />
        <Route
          path="nontechnical"
          element={
            <>
              <Navbar />
              <Nontechnical />
              <FooterMin />
            </>
          }
        />
        <Route
          path="team"
          element={
            <>
              <Navbar />
              <Team />
            </>
          }
        />
        <Route
          path="domains"
          element={
            <>
              <Navbar />
              <Domains />
              <FooterMin />
            </>
          }
        />
        <Route
          path="domains/dom"
          element={
            <>
              <Navbar />
              <Domainspage />
            </>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
