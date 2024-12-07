import './App.css';
import Header from '../components/header/Header';
import Home from '../components/home/Home';
import About from '../components/about/About';
import Skills from '../components/skills/Skills';
import Experience from '../components/experience/Experience';
import Qualification from '../components/qualification/Qualification';
import Work from '../components/work/Work';
import Testimonials from '../components/testimonials/Testimonials';
import Contact from '../components/contact/Contact';
import Footer from '../components/footer/Footer';
import ScrollUp from '../components/scrollup/ScrollUp';

//import para paginas en construcción
/*
        <Home />
        <About />
        <Skills />
        <Experience />
        <Qualification />
        <Work />
        <Testimonials />
        <Contact />
*/
import UnderConstruction from '../components/construction/Building';
function App() {

  return (
    <>
      <Header />

      <main className="main">
        <Home />
        <UnderConstruction />
        <Contact />
      </main>

      <Footer />
      <ScrollUp />
    </>
  )
}

export default App
