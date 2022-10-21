import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer';
import Landing from './Components/Landing/Landing';
import Technical from './Components/Technical/Technical';
import Team from './Components/Team/Team';

function App() {
  return (
    
    <div className="App">
      
      <Navbar />
      <Landing/>
      {/* <Team/> */}
      <Footer />
      
    </div>
   
  );
}

export default App;
