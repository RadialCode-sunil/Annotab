import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './App.css';
import Home from './components/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import Annotab from "./components/Annotab";
import { Route, Routes } from "react-router-dom";
import Manufacturing from "./components/Manufacturing";
import Agriculture from "./components/Agriculture";
import Aerospace from "./components/Aerospace";
import Oil from "./components/Oil";
import Utilities from "./components/Utilities";
import Transportation from "./components/Transportation";
import Telecommunications from "./components/Telecommunications";
import Safety from "./components/Safety";
import Automotive from "./components/Automotive";
import Retail from "./components/Retail";
// import Pricing from "./components/Pricing";
import Blogs from "./components/Blogs";
import Pricingnav from "./components/Pricingnav";

function App() {
  return (
    <div className='bg_darkblue '>

      <Routes>
        <Route exact path="/" element={<Home />}>

        </Route>
        <Route exact path="/annotab" element={<Annotab />}>

        </Route>
        <Route exact path="/Manufacturing" element={<Manufacturing />}>

        </Route>
        <Route exact path="/Agriculture" element={<Agriculture />}>

        </Route>
        <Route exact path="/Aerospace" element={<Aerospace />}>

        </Route>
        <Route exact path="/Oil" element={<Oil />}>

        </Route>
        <Route exact path="/Utilities" element={<Utilities />}>

        </Route>
        <Route exact path="/Transportation" element={<Transportation />}>

        </Route>
        <Route exact path="/Telecommunications" element={<Telecommunications />}>

        </Route>
        <Route exact path="/Safety" element={<Safety />}>

        </Route>
        <Route exact path="/Automotive" element={<Automotive />}>

        </Route>
        <Route exact path="/Retail" element={<Retail />}>

        </Route>
        <Route exact path="/Pricingnav" element={<Pricingnav />}>

        </Route>
        <Route exact path="/Blogs" element={<Blogs />}>

        </Route>


      </Routes>

    </div>
  );
}

export default App;
