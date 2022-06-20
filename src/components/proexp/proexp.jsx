import Exp from "./exp"

import logoFlamme from '../../img/LogoFlamme.png';
import logoLewys from '../../img/logoLewys.png';
import LogoLaravel from '../../img/LogoLaravel.png';
import LogoRails from '../../img/LogoRails.png';
import LogoTD from '../../img/LogoTD.png';
import LogoTailwind from '../../img/LogoTailwind.png';
let descFlamme = "Created the back and front end of a web application with functionalities for users, companies and schedule management; linked application with an API and the company’s ERP. \n Communicated results about the project development through daily and monthly meetings with coworkers (Direction, QHSE, IT) to check if the application meets the company’s needs. \n Wrote documentation with technical explanations and user’s guide. \n Managed the application database, and collected information on the three ERP’s databases.\n Used a new framework: LARAVEL to develop the application.";
let descLewys = "Created the back and front end of a website from scratch, for a schoolteacher who needed to stay in touch with her schoolchildren and their parents. \n Created an API for an intranet to help colleagues communicate. \n Brainstormed with colleagues for the intranet project: shared and debated ideas. \n Learned a new programming language (Ruby) and used the Ruby on Rails framework.";

const ProExp = () => {
    return(
        <div id="ProExp" class="max-h-screen">
            <div>
               <h2 class="text-3xl mt-6">Experiences</h2>
               <div class="2xl:mx-36">
                <Exp logoCompSrc={logoFlamme} title={"FLAMME ASSAINISSEMENT - INTERN WEB DEVELOPER"} details={"Saint-Rémy du Nord, France | January 2022 – April 2022"} logoTech2={LogoLaravel} logoTech3={LogoTD} description={descFlamme}/>
                <Exp logoCompSrc={logoLewys} title={"LEWYS - INTERN WEB DEVELOPER"} details={"Remote – Bordeaux, France | April 2021 – July 2021"} logoTech2={LogoRails} logoTech3={LogoTailwind} description={descLewys}/>
               </div>
            </div>
        </div>
    )
}

export default ProExp