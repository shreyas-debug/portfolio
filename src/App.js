import './App.css';
import { ThemeProvider }   from './contexts/ThemeContext';
import { Footer }          from './components/Footer';
import { Banner }          from './components/Banner';
import { Experience }      from './components/Experience';
import { Projects }        from './components/Projects';
import { About }           from './components/About';
import { BackToTop }       from './components/BackToTop';
import { DotGrid }         from './components/DotGrid';
import { FloatingNav }     from './components/FloatingNav';

function App() {
  return (
    <ThemeProvider>
      <div className="App">
        <DotGrid />
        <main className="scroll-story">
          <Banner />
          <Projects />
          <Experience />
          <About />
          <Footer />
        </main>
        <BackToTop />
        <FloatingNav />
      </div>
    </ThemeProvider>
  );
}

export default App;
