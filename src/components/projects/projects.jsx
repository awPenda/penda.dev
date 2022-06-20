import Project from "./project";

const Projects = () => {
    return(
        <div id="Projects">
            <h1>Projects</h1>
            <Project title={'Portfolio'} text={'This portfolio'} link={'https://github.com/awPenda/penda.dev'}/>
            <Project title={'HighSchool Project'} text={'High school project'} link={'https://github.com/awPenda/Gloubiboulga'}/>
            {/*<Project titre={'oui'}/>*/}
        </div>
    )
}

export default Projects