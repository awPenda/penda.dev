const Project = (props) => {
    return(
        <div id="Project" class="rounded-lg shadow-md text-center">
            <h3 class="font-semibold text-lg">{props.title}</h3>
            <p class="text-justify	">{props.text}</p>
            <a href={props.link} class="font-bold text-center">See on GitHub</a>
        </div>
    )
}

export default Project