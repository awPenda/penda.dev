import IntroPic from '../../img/intropic.jpeg'; 
import CesiLogo from '../../img/cesi.png'; 
import CiblePFI from '../../img/CiblePFI.png'; 

import Skill from './skill';

const Intro = () => {
    return(
        <div id="idIntro" class="">
            <h2 class="text-3xl mt-6">About me</h2>
            <div>
                <div>
                    <ul class="flex flex-row justify-evenly text-xl">
                        <li><a href="#idAbout">About</a></li>
                        <li><a href="#idSkills">Skills</a></li>
                        <li><a href="#idEducation">Education</a></li>
                        <li><a href="#idGoals">Goals</a></li>
                        <li><a href="#idInterests" class="hidden">Interests</a></li>
                    </ul>
                </div>
                <div class="p-8">
                    <div id="idAbout" class="flex flex-row items-center rounded-lg shadow-md m-8 p-2">
                        <img src={IntroPic} alt="intropic" class="w-72 m-4"/>
                        <p id="PersonalProfile" class=" text-justify indent-8 m-4">
                            Currently in 3rd year in computer science at CESI Engineering school, my perseverance and my involvement in my work in addition to my adaptation capacity allowed me to success and flourish in my formation.
                            I am versatile by nature: open to change and ready to learn and give the best of myself.
                            I am also comfortable communicating with others, and I do not hesitate to ask for the help of my colleagues when needed.
                        </p>
                    </div>
                    <div id="idSkills" class="grid grid-cols-3 gap-4 rounded-lg shadow-md m-8 p-2">
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
                    <div id="idEducation" class="flex flex-col rounded-lg shadow-md m-8 p-2">
                        <div class="flex flex-row items-center justify-evenly m-4">
                            <img src={CesiLogo} alt="CesiLogo" />
                            <div class="text-center">
                                <h3 class="font-semibold text-lg">CESI engineering school</h3>
                                <div>MASTER DEGREE IN COMPUTER ENGINEERING</div>
                                <div>Lille, France</div>
                                <div>2019 - 2024</div>
                            </div>
                        </div>
                        <div class="flex flex-col">
                            <button class="bg-gray-200 m-2 p-2">
                                CESI Student Ambassador – CESI engineering school
                            </button>
                            <button class="bg-gray-200 m-2 p-2">
                                Member of Student Union – BDE CESI LILLE  
                            </button>
                        </div>
                    </div>
                    <div id="idGoals" class="flex flex-row justify-center rounded-lg shadow-md m-8 p-2">
                        <div class="hidden">
                            explain
                        </div>
                        <img src={CiblePFI} alt="CiblePFI" class="w-3/4 2xl:w-1/2"/>
                    </div>
                    <div id="idInterests" class="hidden">

                    </div>
                </div>
            </div>


            
            {/*<button class="hidden" style="display: hidden;">View resume/download CV</button>-->*/}
            {/* call skills, education, goals and interests components */}
        </div>
    )
}

export default Intro