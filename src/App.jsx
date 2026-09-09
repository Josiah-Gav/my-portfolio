import { useState } from 'react';
import Header from './Header';
import Skills from './Skills';
import Projects from './Projects';
import Contact from './Contact';
import Footer from './Footer';
import styles from './App.module.css';
import kimphoto from './assets/me/Kim.jpg';
import telemed from './assets/icons/Telemed.png';
import luminest from './assets/icons/luminest-icon.png';
import bird from './assets/icons/Bird.png';
import phpIcon from './assets/icons/php-svgrepo-com.svg';
import laravelIcon from './assets/icons/Laravel.svg';
import reactIcon from './assets/icons/React.svg';
import pythonIcon from './assets/icons/Python.svg';
import djangoIcon from './assets/icons/Django.svg';
import javaIcon from './assets/icons/Java.svg';
import javascriptIcon from './assets/icons/js-svgrepo-com.svg';
import flutterIcon from './assets/icons/Flutter.svg';
import html5Icon from './assets/icons/HTML5.svg';
import css3Icon from './assets/icons/CSS3.svg';
import mysqlIcon from './assets/icons/MySQL.svg';
import tailwindIcon from './assets/icons/Tailwind CSS.svg';

const skillsList = [
  { image: phpIcon, alt: "PHP" },
  { image: laravelIcon, alt: "Laravel" },
  { image: reactIcon, alt: "React" },
  { image: pythonIcon, alt: "Python" },
  { image: djangoIcon, alt: "Django" },
  { image: javaIcon, alt: "Java" },
  { image: javascriptIcon, alt: "JavaScript" },
  { image: flutterIcon, alt: "Flutter" },
  { image: html5Icon, alt: "HTML" },
  { image: css3Icon, alt: "CSS" },
  { image: mysqlIcon, alt: "MySql" },
  { image: tailwindIcon, alt: "Tailwind" },
];

const projectsList = [
  { image: telemed, alt: "CLSU Telemedicine", title: "CLSU Telemedicine", description: "A telemedicine platform for CLSU students and faculty." },
  { image: luminest, alt: "Luminest", title: "Luminest", description: "A Web App for Real Estate Agents." },
  { image: bird, alt: "Flappy Pus", title: "Flappy Pus", description: "A fun flappy bird game made in unity." },
  { image: kimphoto, alt: "My Portfolio", title: "My Portfolio", description: "A personal portfolio website for me." },
];

function App() {
  // State: current color theme, toggled from the nav
  const [theme, setTheme] = useState('dark');

  // Event handling: flips between 'dark' and 'light' (arrow function)
  const toggleTheme = () => setTheme(theme === 'dark' ? 'light' : 'dark');

  return (
    <div className={styles.app} data-theme={theme}>
      <Header theme={theme} onToggleTheme={toggleTheme}/>
      <div className={styles.section} id="skills">
        <h2 className={styles.sectionTitle}>My Skills</h2>
        {/* Arrow function in .map(); props (image/alt) passed down to Skills */}
        <div className={styles.skillsList}>
          {skillsList.map((skill) => (
            <Skills key={skill.alt} image={skill.image} alt={skill.alt}/>
          ))}
        </div>
      </div>
      <div className={styles.section} id="projects">
        <h2 className={styles.sectionTitle}>My Projects</h2>
        {/* Arrow function in .map(); props (image/alt/title/description) passed down to Projects */}
        <div className={styles.projectsList}>
          {projectsList.map((project) => (
            <Projects key={project.title} image={project.image} alt={project.alt} title={project.title} description={project.description}/>
          ))}
        </div>
      </div>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
