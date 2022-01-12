import Topbar from "./components/topbar/Topbar";
import Home from "./components/pages/Home";
import HipImplant from "./components/pages/HipImplant";
import Redirect from "./components/pages/Redirect";
import CrossyRoad from "./components/pages/CrossyRoad";
import IDDisplayer from "./components/pages/IDDisplayer";
import "./App.scss"
import { useState } from "react";
import Menu from "./components/menu/Menu";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';


function App() {
  const [menuOpen,setMenuOpen] = useState(false)
  return (
    <Router>
      <div className="app">
      <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path = '/portfolio/hip-implant' element={<HipImplant/>} />
        <Route path='/portfolio/vaxnotifier' element={<Redirect loc="https://devpost.com/software/vaxnotifier"/>} />
        <Route path='/portfolio/eventlink' element={<Redirect loc="https://devpost.com/software/eventlink"/>} />
        <Route path='/portfolio/crossyroad' element={<CrossyRoad />} />
        <Route path='/portfolio/id-displayer' element={<IDDisplayer />} />
      </Routes>
      </div>
    </Router>
  );
}

export default App;
