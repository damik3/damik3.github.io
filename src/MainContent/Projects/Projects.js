import Navbar from "../../Navbar/Navbar";
import Footer from "../../Footer/Footer";
import Logo1 from "./ProjectIcon1.png";
import Logo2 from "./ProjectIcon2.png";

function Projects () {
    return (
        <div>
            <Navbar></Navbar>

            <div className="d-flex flex-column align-items-center">
                <h1 className="fw-bold">Projects</h1>
                <div className="section-grid d-flex flex-wrap justify-content-center">

                    <div className="d-flex flex-column align-items-center m-5">
                        <img src={Logo1} alt="Logo 1" className="section-logo m-2"/>
                        <h4 className="fw-bold m-2">GoldenSpan Engineering</h4>
                        <span className="m-2">2022</span>
                    </div>

                    <div className="d-flex flex-column align-items-center m-5">
                        <img src={Logo2} alt="Logo 2" className="section-logo m-2"/>
                        <h4 className="fw-bold m-2">VoltLogic Solutions</h4>
                        <span className="m-2">2023</span>
                    </div>

                </div>
            </div>

            <Footer></Footer>
        </div>
    )
}

export default Projects;