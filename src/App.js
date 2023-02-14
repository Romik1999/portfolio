import './styles/reset.css'
import './styles/main.css'

import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import Project from "./pages/Project";

function App() {
    return (
        <div className="App">

            <Navbar/>

            {/*<Home/>*/}
            {/*<Projects/>*/}
            <Project/>
            {/*<Contacts/>*/}
            <Footer/>
        </div>
    );
}

export default App;
