const Project = (props) => {
    return(
        <div id="Project">
            <h2>{props.title}</h2>
            <div>{props.text}</div>
            <a href={props.link}>See on GitHub</a>
        </div>
    )
}

export default Project