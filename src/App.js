import './App.css';
import {Route, Routes} from "react-router-dom";
import Home from "./MainContent/Home/Home";
import Experiences from "./MainContent/Experiences/Experiences";
import 'bootstrap/dist/css/bootstrap.min.css';
import Projects from "./MainContent/Projects/Projects";
import Hobbies from "./MainContent/Hobbies/Hobbies";

function App() {
    return (
        <>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/home" element={<Home />} />
                <Route path="/experiences" element={<Experiences />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/hobbies" element={<Hobbies />} />
            </Routes>
        </>
    );
}

export default App;
