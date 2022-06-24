import Project from "./project";
let gBLtext = "End of High school project. \n HTML, CSS, JQuery.";

const Projects = () => {
    return(
        <div id="idProjects" class="max-h-screen ">
            <h2 class="text-3xl mt-6">Projects</h2>
            <div class="grid grid-cols-2 gap-4 justify-items-stretch place-items-stretch m-8">
                <Project title={'Portfolio'} text={'This portfolio'} link={'https://github.com/awPenda/penda.dev'}/>
                <Project title={'HighSchool Project'} text={gBLtext} link={'https://github.com/awPenda/Gloubiboulga'}/>
                {/*<Project titre={'oui'}/>*/}
            </div>
        </div>
    )
}

export default Projects