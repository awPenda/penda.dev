import ExpPic from "./expPic"
import img from "../../img/LogoTD.png"
const PersoExp = () => {
    return(
        <div id="PersoExp">
            {/*cresi, ambassadeur, bde
            <ExpPic imgBgUrl={img}/>
            <ExpPic/>*/}
            <h1>Personal Experiences</h1>
            <ExpPic imgBgUrl={img} title={"Communication Supervisor – CRESI RACING"} details={"North of France | 2021 – Today"} description={"Organizes communication through social networks. Participates in meetings and project management."}/>
            <ExpPic imgBgUrl={img} title={"CESI Student Ambassador – CESI engineering school"} details={"North of France | 2019 – Today"} description={"Represents the school at high schools and national fairs. Assists in logistics and organization of open houses."}/>
            <ExpPic imgBgUrl={img} title={"Member of Student Union – BDE CESI LILLE"} details={"Lille, France | 2020"} description={"Collected ideas for student projects, events, or wishes such as facility improvements. Conceived a project to encourage students to exercise."}/>
        </div>
    )
}

export default PersoExp