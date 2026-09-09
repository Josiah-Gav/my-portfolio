import Header from './Header';
import Skills from './Skills';
import Projects from './Projects';
import Contact from './Contact';
function App() {
  return (
    <div>
      <Header/>
      <div>
        <h2>My Skills</h2>
        <Skills image="" alt="PHP"/>  
        <Skills image="" alt="Laravel"/>  
        <Skills image="" alt="React"/>  
        <Skills image="" alt="Python"/>
        <Skills image="" alt="Django"/>
        <Skills image="" alt="Java"/>
        <Skills image="" alt="JavaScript"/>
        <Skills image="" alt="Flutter"/>
        <Skills image="" alt="HTML"/>
        <Skills image="" alt="CSS"/>
        <Skills image="" alt="MySql"/>
      </div>
      <div>
        <h2>My Projects</h2>
        <Projects image="" alt="CLSU Telemedicine" title="CLSU Telemedicine" description="A telemedicine platform for CLSU students and faculty."/>  
        <Projects image="" alt="Luminest" title="Luminest" description="A Web App for Real Estate Agents."/>  
        <Projects image="" alt="Flappy Pus" title="Flappy Pus" description="A fun flappy bird game made in unity."/>
        <Projects image="" alt="My Portfolio" title="My Portfolio" description="A personal portfolio website for me."/>
      </div>
      <Contact/>
    </div>
  );
}

export default App
