import './App.css';
import { ThemeProvider } from './contexts/ThemeContext';
import { NavBar } from './components/NavBar';
import { Banner } from './components/Banner';
import 'bootstrap/dist/css/bootstrap.min.css';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Experience } from './components/Experience';
import { Projects } from './components/Projects';
import { Footer } from './components/Footer';

function App() {
  return (
    <ThemeProvider>
      <div className="App">
        <NavBar />
        <Banner />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
