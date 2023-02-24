// import { Canvas } from "@react-three/fiber";
import { motion } from "framer-motion";
import { Route, Routes /* , useLocation */ } from "react-router-dom";
import React, {Suspense} from 'react';
import "./App.css";
// import Chatbot from "./Components/Chatbot/Chatbot";
import Domains from "./Components/Domains/Domains";
// import Events from "./Components/Events/Events";
import Footer from "./Components/Footer/Footer";
// import Landing from "./Components/Landing/Landing";
import Navbar from "./Components/Navbar/Navbar";
import Corporate from "./Components/Nontechnical/Components/Corporate";
import Creatives from "./Components/Nontechnical/Components/Creatives";
import Editorial from "./Components/Nontechnical/Components/Editorial";
import Sponsorship from "./Components/Nontechnical/Components/Sponsorship";
import Nontechnical from "./Components/Nontechnical/Nontechnical";
import ParticleBG from "./Components/ParticleBG/ParticleBG";
import Team from "./Components/Team/Team";
// import Team from "./Components/Team/Team";
import AIML from "./Components/Technical/Components/AIML";
import AppDev from "./Components/Technical/Components/App";
import Competitive from "./Components/Technical/Components/Competitive";
import Web from "./Components/Technical/Components/Web";
import Technical from "./Components/Technical/Technical";
const LazyLanding = React.lazy(()=>import('./Components/Landing/Landing'))
const LazyTeam = React.lazy(()=>import('./Components/Team/Team'))

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
      ></motion.div>
      {/* <Chatbot /> */}
      {/* <Navbar /> */}
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Navbar />
              <Suspense fallback={<div>Loading...</div>}>
                <LazyLanding />
              </Suspense>
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
              <ParticleBG />
            </>
          }
        />
        <Route
          path="nontechnical"
          element={
            <>
              <Navbar />
              <Nontechnical />
              <ParticleBG />
            </>
          }
        />
        <Route
          path="team"
          element={
            <>
              <Navbar />
              <Suspense fallback={<div>Teams page is loading...</div>}>
              <LazyTeam />
              </Suspense>
            </>
          }
        />
        <Route
          path="domains"
          element={
            <>
              <Navbar />
              <Domains />
              <ParticleBG />
            </>
          }
        />
        <Route
          path="nontechnical/editorial"
          element={
            <>
              <Navbar />
              <Editorial />
              <ParticleBG />
            </>
          }
        />
        <Route
          path="nontechnical/creatives"
          element={
            <>
              <Navbar />
              <Creatives />
              <ParticleBG />
            </>
          }
        />
        <Route
          path="nontechnical/corporate"
          element={
            <>
              <Navbar />
              <Corporate />
              <ParticleBG />
            </>
          }
        />
        <Route
          path="nontechnical/sponsorship"
          element={
            <>
              <Navbar />
              <Sponsorship />
              <ParticleBG />
            </>
          }
        />
        <Route
          path="technical/cp"
          element={
            <>
              <Navbar />
              <Competitive />
              <ParticleBG />
            </>
          }
        />
        <Route
          path="technical/aiml"
          element={
            <>
              <Navbar />
              <AIML />
              <ParticleBG />
            </>
          }
        />
        <Route
          path="technical/appdev"
          element={
            <>
              <Navbar />
              <AppDev />
              <ParticleBG />
            </>
          }
        />
        <Route
          path="technical/webdev"
          element={
            <>
              <Navbar />
              <Web />
              <ParticleBG />
            </>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
