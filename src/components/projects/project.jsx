const Project = (props) => {
    return(
        <div id="Project">
            <h3>{props.title}</h3>
            <div>{props.text}</div>
            <a href={props.link}>See on GitHub</a>
        </div>
    )
}

export default Project