const ExpPic = (props) => {
    return(
        <div id="ExpPic" class="bg-black h-1/2 w-1/2 mt-6 mb-2" >
            <div class="bg-cover bg-center h-full w-full" style={{backgroundImage: `url(${props.background})`}}>
                <div class="flex flex-col justify-end p-4 h-full text-transparent hover:text-black hover:backdrop-opacity-10 hover:backdrop-blur-md  hover:bg-white/70">
                    <h3 class="font-bold">{props.title}</h3>
                    <div>{props.details}</div>
                    <div>{props.description}</div>
                </div>
            </div>
        </div>
    )
}

export default ExpPic
