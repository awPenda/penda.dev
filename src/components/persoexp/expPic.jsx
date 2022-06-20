const ExpPic = (props) => {
    return(
        <div id="ExpPic">
            <div>
                {/*<img src="" alt="" /> ???*/}
                <h2>{props.title}</h2>
                <div>{props.details}</div>
                <div>{props.description}</div>
            </div>
        </div>
    )
}

export default ExpPic
