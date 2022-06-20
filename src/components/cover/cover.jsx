import CoverPic from '../../img/coverpic.jpeg'; 


const Cover = () => {
    return(
        <div id="Cover" class="flex flex-row justify-evenly items-center h-screen">
            <div class="text-center">
                <h2> I'm <b>Amelie</b></h2>
                <ul>
                    <li>Computer engineering student</li>
                    <li>Multipotentialite</li>
                    <li>Multi-Passionate</li>
                    <li>Human contact lover</li>
                    <li>View my resume</li>
                </ul>
                <ul class="flex flex-row justify-evenly ">
                    <li><a href="https://github.com/awPenda">GitHub</a></li>
                    <li><a href="https://linkedin.com/in/ameliewillems">Linkedin</a></li>
                    <li><a href="mailto:amelie.willems2@gmail.com">Mail</a></li>
                </ul>
            </div>
            <div>
                <img src={CoverPic} alt="CoverPic" class="rounded-full w-96"/>
            </div>
        </div>
    )
}

export default Cover