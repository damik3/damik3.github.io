import Logo1 from "./img/ProjectIcon1.png";
import Logo2 from "./img/ProjectIcon2.png";
import {Link} from "react-router-dom";

function Projects () {
    return (
        <div>
            <div className="d-flex flex-column align-items-center">
                <h1 className="fw-bold">Projects</h1>
                <div className="container d-flex flex-wrap justify-content-center">

                    <Link to="goldenspan-engineering" className="d-flex flex-column align-items-center m-5 clickable">
                        <img src={Logo1} alt="Logo 1" className="section-logo m-2"/>
                        <h4 className="fw-bold m-2">GoldenSpan Engineering</h4>
                        <span className="m-2">2022</span>
                    </Link>

                    <Link to="voltlogic-solutions" className="d-flex flex-column align-items-center m-5 clickable">
                        <img src={Logo2} alt="Logo 2" className="section-logo m-2"/>
                        <h4 className="fw-bold m-2">VoltLogic Solutions</h4>
                        <span className="m-2">2023</span>
                    </Link>

                </div>
            </div>
        </div>
    )
}

export default Projects;