//import logo from './logo.svg';
import './App.css';

import Header from "./components/header/header";
import Cover from "./components/cover/cover";
import Intro from "./components/intro/intro";
import Pro from "./components/proexp/proexp";
import Perso from "./components/persoexp/persoexp";
import Projects from "./components/projects/projects";
import Contact from "./components/contact/contact";
import Footer from "./components/footer/footer";

function App() {
  /*return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
  */
 return <div class="mx-56">
    <Header/>
    <Cover/>
    <Intro/>
    <Pro/>
    <Perso/>
    <Projects/>
    {/*<Contact/>*/}
    <Footer/>
  </div>
  /* should givea clear idea of who i am and what i can do
  plan : 
    Header = table of contents or Navigation menu
    Cover = Cover or Title banner
    Intro = A personal profile => professional interests, goals, philosophies
    Goals = A statement of professional goals + Any relevant information from the PFI seminar
    Resume = A résumé (+ credentials such as transcripts/references/letters of recommendation, honors/awards)
    Personal achievements => leadership highlights, research/project outcomes, YOUR WORK AND CONTRIBUTIONS
    ... An organized list of accomplishments (artifacts, evidence, samples)
    Contact
  */
    

}

export default App;
