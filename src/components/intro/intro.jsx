import IntroPic from '../../img/intropic.jpeg'; 
import CesiLogo from '../../img/cesi.png'; 
import CiblePFI from '../../img/CiblePFI.png'; 

import Skill from './skill';

const Intro = () => {
    return(
        <div id="Intro">
            <h1>About me</h1>
            <div>
                <div>
                    <ul>
                        <li>About</li>
                        <li>Skills</li>
                        <li>Education</li>
                        <li>Goals</li>
                        <li class="hidden">Interests</li>
                    </ul>
                </div>
                <div>
                    <div id="about">
                        <img src={IntroPic} alt="intropic" />
                        <div id="PersonalProfile">
                            Currently in 3rd year in computer science at CESI Engineering school, my perseverance and my involvement in my work in addition to my adaptation capacity allowed me to success and flourish in my formation.
                            I am versatile by nature: open to change and ready to learn and give the best of myself.
                            I am also comfortable communicating with others, and I do not hesitate to ask for the help of my colleagues when needed.
                        </div>
                    </div>
                    <div id="skills">
                        {/* call skill * nb skill */}
                        <Skill name={"Soft Skills"} details={"Adaptability, Teamwork, Leadership, Versatile, Sociable, Curious"}/>
                        <Skill name={"Programming Languages"} details={"C, C++, C#, Python"}/>
                        <Skill name={"Web"} details={"HTML, CSS, Javascript, PHP"}/>
                        <Skill name={"Frameworks"} details={"Bootstrap, TailwindCSS, Laravel, Ruby On Rails, React, Jquery"}/>
                        <Skill name={"Databases"} details={"SQL"}/>
                        <Skill name={"Office Automation"} details={"Microsoft Office 365, Libre Office, Notion"}/>
                        <Skill name={"Project Management"} details={"Jira, GitHub"}/>
                        <Skill name={"Versionning"} details={"Git, GitHub"}/>
                        <Skill name={"Virtualization"} details={"VMware, Docker, Centreon"}/>
                        <Skill name={"Networking & System Administration basis"} details={"CCNA7"}/>
                        <Skill name={"Languages"} details={"French Native, English B2 advanced"}/>
                    </div>
                    <div id="education">
                        <div>
                            <img src={CesiLogo} alt="CesiLogo" />
                            <div>
                                <h2>CESI engineering school</h2>
                                <div>MASTER DEGREE IN COMPUTER ENGINEERING</div>
                                <div>Lille, France</div>
                                <div>2019 - 2024</div>
                            </div>
                        </div>
                        <div>
                            <button>
                                CESI Student Ambassador – CESI engineering school
                            </button>
                            <button>
                                Member of Student Union – BDE CESI LILLE  
                            </button>
                        </div>
                    </div>
                    <div id="goals">
                        <div class="hidden">
                            explain
                        </div>
                        <img src={CiblePFI} alt="CiblePFI" />
                    </div>
                    <div id="interests" class="hidden">

                    </div>
                </div>
            </div>


            
            {/*<button class="hidden" style="display: hidden;">View resume/download CV</button>-->*/}
            {/* call skills, education, goals and interests components */}
        </div>
    )
}

export default Intro