import Header from './Header';
import Skills from './Skills';
import Projects from './Projects';
import Contact from './Contact';
import styles from './App.module.css';

const skillsList = [
  { image: "", alt: "PHP" },
  { image: "", alt: "Laravel" },
  { image: "", alt: "React" },
  { image: "", alt: "Python" },
  { image: "", alt: "Django" },
  { image: "", alt: "Java" },
  { image: "", alt: "JavaScript" },
  { image: "", alt: "Flutter" },
  { image: "", alt: "HTML" },
  { image: "", alt: "CSS" },
  { image: "", alt: "MySql" },
];

const projectsList = [
  { image: "", alt: "CLSU Telemedicine", title: "CLSU Telemedicine", description: "A telemedicine platform for CLSU students and faculty." },
  { image: "", alt: "Luminest", title: "Luminest", description: "A Web App for Real Estate Agents." },
  { image: "", alt: "Flappy Pus", title: "Flappy Pus", description: "A fun flappy bird game made in unity." },
  { image: "", alt: "My Portfolio", title: "My Portfolio", description: "A personal portfolio website for me." },
];

function App() {
  return (
    <div className={styles.app}>
      <Header/>
      <div className={styles.section}>
        <h2 className={styles.sectionTitle}>My Skills</h2>
        {/* Arrow function in .map(); props (image/alt) passed down to Skills */}
        <div className={styles.skillsList}>
          {skillsList.map((skill) => (
            <Skills key={skill.alt} image={skill.image} alt={skill.alt}/>
          ))}
        </div>
      </div>
      <div className={styles.section}>
        <h2 className={styles.sectionTitle}>My Projects</h2>
        {/* Arrow function in .map(); props (image/alt/title/description) passed down to Projects */}
        <div className={styles.projectsList}>
          {projectsList.map((project) => (
            <Projects key={project.title} image={project.image} alt={project.alt} title={project.title} description={project.description}/>
          ))}
        </div>
      </div>
      <Contact/>
    </div>
  );
}

export default App;
