import './styles/reset.css'
import './styles/main.css'

import {BrowserRouter as Router, Routes, Route} from "react-router-dom";

import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import Projects from "./pages/Projects";
import Project from "./pages/Project";
import Home from "./pages/Home";
import Contacts from "./pages/Contacts";

import ScrollToTop from "./utils/scrollToTop";

function App() {
    return (
        <div className="App">

            <Router>
                <ScrollToTop/>
                <Navbar/>
                <Routes>
                    <Route path="https://romik1999.github.io/portfolio/" element={<Home />}></Route>
                    <Route path="https://romik1999.github.io/portfolio/projects" element={<Projects />}></Route>
                    <Route path="https://romik1999.github.io/portfolio/project/:id" element={<Project />}></Route>
                    <Route path="https://romik1999.github.io/portfolio/contacts" element={<Contacts />}></Route>
                </Routes>
                <Footer/>
            </Router>
        </div>
    );
}

export default App;
