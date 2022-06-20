import Project from "./project";

const Projects = () => {
    return(
        <div id="Projects" class="h-screen">
            <h2>Projects</h2>
            <Project title={'Portfolio'} text={'This portfolio'} link={'https://github.com/awPenda/penda.dev'}/>
            <Project title={'HighSchool Project'} text={'High school project'} link={'https://github.com/awPenda/Gloubiboulga'}/>
            {/*<Project titre={'oui'}/>*/}
        </div>
    )
}

export default Projects