import CoverPic from '../../img/coverpic.jpeg'; 


const Cover = () => {
    return(
        <div id="Cover">
            <div>
                <img src={CoverPic} alt="CoverPic" />
            </div>
            <div>
                <h1> I'm <b>Amelie</b></h1>
                <ul>
                    <li>Computer engineering student</li>
                    <li>Multipotentialite</li>
                    <li>Multi-Passionate</li>
                    <li>Human contact lover</li>
                    <li>View my resume</li>
                </ul>
                <ul>
                    <li><a href="https://github.com/awPenda">GitHub</a></li>
                    <li><a href="https://linkedin.com/in/ameliewillems">Linkedin</a></li>
                    <li><a href="mailto:amelie.willems2@gmail.com">Mail</a></li>
                </ul>
            </div>
        </div>
    )
}

export default Cover