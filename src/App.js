import './App.css';
import { ThemeProvider }   from './contexts/ThemeContext';
import { NavBar }          from './components/NavBar';
import { Footer }          from './components/Footer';
import { DotGrid }         from './components/DotGrid';
import { Banner }          from './components/Banner';
import { Experience }      from './components/Experience';
import { Projects }        from './components/Projects';
import { Skills }          from './components/Skills';
import { About }           from './components/About';

function App() {
  return (
    <ThemeProvider>
      <div className="App">
        <DotGrid />
        <NavBar />
        <Banner />
        <Experience />
        <Projects />
        <Skills />
        <About />
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
