import ExpPic from "./expPic"
import ambassadeurPic from "../../img/ambassadeurpic.jpeg"
import cresiPic from "../../img/cresipic.jpeg"
import BdePic from "../../img/cresipic.jpeg"


const PersoExp = () => {
    return(
        <div id="PersoExp">
            <h2 class="text-3xl mt-6">Personal Experiences</h2>
            <div class="flex flex-col items-center h-screen min-h-screen 2xl:mx-36">
                <ExpPic background={cresiPic} title={"Communication Supervisor – CRESI RACING"} details={"North of France | 2021 – Today"} description={"Organizes communication through social networks. Participates in meetings and project management."}/>
                <ExpPic background={ambassadeurPic} title={"CESI Student Ambassador – CESI engineering school"} details={"North of France | 2019 – Today"} description={"Represents the school at high schools and national fairs. Assists in logistics and organization of open houses."}/>
                <ExpPic background={BdePic} title={"Member of Student Union – BDE CESI LILLE"} details={"Lille, France | 2020"} description={"Collected ideas for student projects, events, or wishes such as facility improvements. Conceived a project to encourage students to exercise."}/>
            </div>
        </div>
    )
}

export default PersoExp