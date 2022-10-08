import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer';
import Landing from './Components/Landing/Landing';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Landing/>
      <Footer />
    </div>
  );
}

export default App;
