const Skill = (props) => {
    return(
        <div id="Skill" class="bg-gray-200 p-2">
            <h3>{props.name}</h3>
            <div>{props.details}</div>
            <div class="hidden">level</div>
            

            {/*call skill componenet with variable to change*/}
        </div>
    )
}

export default Skill

