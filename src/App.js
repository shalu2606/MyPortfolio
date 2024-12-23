import './App.css';
import About from './components/About';
import Contact from './components/Contact';
import Header from './components/header';
import Hero from './components/Hero';
import Projects from './components/projects';
import Resume from './components/Resume';
import Footer from './components/Footer';

function App() {
  return (
<div>
  <Header/>
  <Hero/>
  <About/>
  <Projects/>
  <Resume/>
  <Contact/>
  <Footer/>
</div>
  )
}

export default App;
