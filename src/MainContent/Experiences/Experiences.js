import './Experiences.css'
import Navbar from "../../Navbar/Navbar";
import Footer from "../../Footer/Footer";
import Logo1 from './5e0faf21-4fe7-4397-a0bb-4ef2e2cb2723.webp'
import Logo2 from './571cc9f0-c184-4edc-bb45-3041958b018e.webp'
import Logo3 from './b7b82bf6-fd6e-4a3f-9ed1-d03398e17a27.webp'

function Experiences () {
    return (
        <div>
            <Navbar></Navbar>

            <div className="d-flex flex-column align-items-center">
                <h1 className="fw-bold">Experiences</h1>
                <div className="section-grid d-flex flex-wrap justify-content-center">

                    <div className="d-flex flex-column align-items-center m-5">
                        <img src={Logo1} alt="Logo 1" className="section-logo m-2"/>
                        <h4 className="fw-bold m-2">Global Engineering Academy</h4>
                        <span className="m-2">2020</span>
                    </div>

                    <div className="d-flex flex-column align-items-center m-5">
                        <img src={Logo2} alt="Logo 2" className="section-logo m-2"/>
                        <h4 className="fw-bold m-2">Tech Institute</h4>
                        <span className="m-2">2020-2021</span>
                    </div>

                    <div className="d-flex flex-column align-items-center m-5">
                        <img src={Logo3} alt="Logo 3" className="section-logo m-2"/>
                        <h4 className="fw-bold m-2">Internship</h4>
                        <span className="m-2">2022</span>
                    </div>

                </div>
            </div>

            <Footer></Footer>
        </div>
    )
}

export default Experiences;