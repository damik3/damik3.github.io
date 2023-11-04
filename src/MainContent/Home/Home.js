import Navbar from "../../Navbar/Navbar";
import './Home.css'
import ChrisakosImage from './Chrisakos.jpg'

function Home () {
    return (
        <div>
            <Navbar></Navbar>

            <div className="d-flex justify-content-center mx-5">
                <div className="d-flex" style={{maxWidth:  '1536px'}}>
                    {/* Image */}
                    <img src={ChrisakosImage} alt="Chrisakos img" className="main-image"></img>
                    {/* Details */}
                    <div className="d-flex flex-column justify-content-center mx-5">
                        <h1 className="fw-bold">Chrsostomos Karakassis</h1>
                        <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed pharetra et leo in auctor. Sed dolor purus, dignissim a porttitor quis, fermentum eget diam. Duis sed neque eu nisi gravida dictum. Duis cursus lacinia purus ut varius. Pellentesque leo arcu, laoreet in luctus vel, posuere non elit. Nunc condimentum id lectus in varius. Ut nec quam vel mi blandit vehicula at at ex. Etiam luctus porttitor sapien, non hendrerit erat efficitur id. Praesent rhoncus eget arcu in consequat. Sed posuere tincidunt magna, non mattis diam pretium nec. Vestibulum nec feugiat turpis, et consequat nibh. </span>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Home;