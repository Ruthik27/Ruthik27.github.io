import { useEffect, useState } from 'react';
import Lenis from 'lenis';
import Cursor from './components/Cursor';
import MouseSpotlight from './components/MouseSpotlight';
import Preloader from './components/Preloader';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Marquee from './components/Marquee';
import About from './components/About';
import Experience from './components/Experience';
import Education from './components/Education';
import Expertise from './components/Expertise';
import Projects from './components/Projects';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ResumePopup from './components/ResumePopup';

export default function App() {
  const [data, setData] = useState<any>(null);
  const [theme, setTheme] = useState('dark');

  useEffect(() => {
    // Set dark mode as default on document
    document.documentElement.classList.add('dark');
    
    fetch('/ruthik_data.json')
      .then(res => res.json())
      .then(json => setData(json));

    const lenis = new Lenis();
    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    document.documentElement.classList.toggle('light');
    document.documentElement.classList.toggle('dark');
  };

  if (!data) return null;

  return (
    <div className="relative">
      <Preloader />
      <Cursor />
      <MouseSpotlight />
      <Navbar theme={theme} toggleTheme={toggleTheme} />
      
      <main>
        <Hero data={data} />
        <Marquee items={data.marquee} />
        <About data={data} />
        <Experience data={data} />
        <Education data={data} />
        <Expertise data={data} />
        <Projects data={data} />
        <Certifications data={data} />
        <Contact data={data} />
      </main>

      <ResumePopup theme={theme} resumeUrl={data.identity.resume || "/resume.pdf"} />
      <Footer data={data} />
    </div>
  );
}
