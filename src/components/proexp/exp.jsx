const Exp = (props) => {
    return(
        <div id="Exp" class="flex flex-row p-2 my-6 mx-2 items-center rounded-lg shadow-md">
                <img src={props.logoCompSrc} alt="LogoCompany" class="max-w-80 ml-8"/>
                <div class="flex flex-col items-center text-center w-full">
                    <h3 class="font-semibold text-lg">{props.title}</h3>
                    <div>{props.details}</div>
                    <div class="flex flex-row items-center py-2 px-4">
                        <img src={props.logoTech2} class="max-h-24 mx-2" alt="LogoTechnologyOne" />
                        <img src={props.logoTech3} class="max-h-24 mx-2" alt="LogoTechnologyTwo" />
                    </div>
                    <p name='moredetailsdiv' class=" text-justify indent-8 m-4 hidden">
                        {props.description}
                    </p>
                    <button class="font-bold">more details</button>
                </div>
        </div>
    )
}

export default Exp