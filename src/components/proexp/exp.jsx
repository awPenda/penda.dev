const Exp = (props) => {
    return(
        <div id="Exp">
            <div><img src={props.logoCompSrc} alt="LogoCompany" /></div>
            <div>
                <h2>{props.title}</h2>
                <div>{props.details}</div>
                <div>
                    <img src={props.logoTech1} alt="LogoTechnologyOne" />
                    <img src={props.logoTech2} alt="LogoTechnologyTwo" />
                </div>
                <div name='moredetailsdiv'>{props.description}</div>
                <button>more details</button>
            </div>
        </div>
    )
}

export default Exp