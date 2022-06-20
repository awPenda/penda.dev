import Project from "./project";

const Projects = () => {
    return(
        <div id="Projects" class="max-h-screen ">
            <h2 class="text-3xl mt-6">Projects</h2>
            <div class="grid grid-cols-2 gap-4 justify-items-stretch place-items-stretch m-8">
                <Project title={'Portfolio'} text={'This portfolio'} link={'https://github.com/awPenda/penda.dev'}/>
                <Project title={'HighSchool Project'} text={'High school project'} link={'https://github.com/awPenda/Gloubiboulga'}/>
                {/*<Project titre={'oui'}/>*/}
            </div>
        </div>
    )
}

export default Projects