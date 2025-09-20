import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  useNavigate,
  useParams,
  Router,
  useLocation
} from "react-router-dom";
// import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
// import LandingPage from './pages/LandingPage';
import Contact from './pages/Contact';
import Dashbord from './pages/Dashbord';
// import Profile from './pages/Profile';
import Signup from './pages/Signup';
import Footer from './components/Footer';
import Accreditation from './pages/Accreditation';
import Nav from './components/Header';
import About from './pages/About';
import RealHome from './pages/RealHome';


function App() {
  const location = useLocation();
  

  // Pages where Navbar & Footer should be hidden
  const hideLayout = ["/signin", "/signup"].includes(location.pathname)
  

  return (
    <div className=''>

      {!hideLayout && <Nav></Nav>}

      <Routes>
        <Route path="/" element={<HomePage></HomePage>}></Route>
        <Route path="/home" element={<RealHome></RealHome>}></Route>
        {/* <Route path="/LandingPage" element={<LandingPage></LandingPage>}></Route> */}
        <Route path="/Contact" element={<Contact></Contact>}></Route>
        <Route path="/Dashbord" element={<Dashbord></Dashbord>}></Route>
        {/* <Route path="/Profile" element={<Profile></Profile>}></Route> */}
        <Route path="/Signin" element={<Signup></Signup>}></Route>
        <Route path="/About" element={<About></About>}></Route>
        <Route path="/Signup" element={<Signup></Signup>}></Route>
        <Route path="/Accreditation" element={<Accreditation></Accreditation>}></Route>
      </Routes>

      {!hideLayout && <Footer />}

    </div>
  )
}

export default App
