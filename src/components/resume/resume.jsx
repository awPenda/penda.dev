import ProExp from "../proexp/proexp";
import Education from "../education/education";
import Skills from "../skills/skills";


const Resume = () => {
    return(
        <div id="Resume">
            <div id="Education">
                <Education/>
            </div>
            <div id="ProExp">
                <ProExp/>
            </div>
            <div id="Skills">
                <Skills/>
            </div>
        </div>
    )
}

export default Resume