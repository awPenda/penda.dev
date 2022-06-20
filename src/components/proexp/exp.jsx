const Exp = (props) => {
    return(
        <div id="Exp" class="flex flex-row p-2 m-2 bg-gray-200 items-center">
            <img src={props.logoCompSrc} alt="LogoCompany" class="w-80"/>
            <div class="flex flex-col text-center">
                <h3>{props.title}</h3>
                <div>{props.details}</div>
                <div class="flex flex-row justify-evenly items-center">
                    <img src={props.logoTech2} alt="LogoTechnologyOne" />
                    <img src={props.logoTech3} alt="LogoTechnologyTwo" />
                </div>
                <p name='moredetailsdiv' class=" text-justify indent-8 m-4">
                    {props.description}
                </p>
                <button class="bg-gray-400">more details</button>
            </div>
        </div>
    )
}

export default Exp