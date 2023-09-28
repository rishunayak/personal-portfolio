
import './App.css';
import Navbar from './Pages/Navbar';
import Skills from './Pages/Skills';
import Home from './Pages/Home';
import About from './Pages/About';
import Projects from './Pages/Projects';
import Contact from './Pages/Contact';
import SideNavbar from './Pages/SideNavbar';

function App() {
  return (
    <>
   <Navbar/>
    {/* <SideNavbar/> */}
    <Home/>
    <About/>
    <Skills/>
    <Projects/>
    <Contact/>
    
    </>
  );
}

export default App;
