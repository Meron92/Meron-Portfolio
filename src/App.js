import './App.css';
import Header from './Pages/Header/Header';
import About from './Pages/About/About'
import Projects from './Pages/Project/Projects';
import Skills from './Pages/Skill/Skills';
import Contact from './Pages/Contact/Contact';
import { useState } from 'react';
function App() {
  const [theme, setTheme] = useState('dark');

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };
  return (
    <div className={`App ${theme}`}>
  <Header toggleTheme={toggleTheme} isDarkMode={theme === 'dark'}/>
  <About toggleTheme={toggleTheme} />
  <Skills toggleTheme={toggleTheme}/>
  <Projects toggleTheme={toggleTheme}/>
  <Contact toggleTheme={toggleTheme}/>
    </div>
  );
}

export default App;
