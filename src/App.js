import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footers/Footer';
import Landing from './Components/Landing/Landing';
import Technical from './Components/Technical/Technical';
import Corporate from './Components/Corporate/Corporate';
import Creatives from './Components/Creatives/Creatives';
import Team from './Components/Team/Team';
import {Routes,Route} from 'react-router-dom';
function App() {
  return (
    <div className="App">
     <Navbar/>
     <Routes>
        <Route path='/' element={<Landing/>}/>
        <Route path='technical' element={<Technical/>}/>
        <Route path='corporate' element={<Corporate/>}/>
        <Route path='creative' element={<Creatives/>}/>
        <Route path='team' element={<Team/>}/>
     </Routes>
     <Footer/>
    </div>
  );
}

export default App;
