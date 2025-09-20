import { useState } from 'react'
import { GoogleOAuthProvider } from "@react-oauth/google";
import {
  BrowserRouter,
  Routes,
  Route,
  useLocation
} from "react-router-dom";

import HomePage from './pages/HomePage';
import Contact from './pages/Contact';
import Dashbord from './pages/Dashbord';
import Signup from './pages/Signup';
import Footer from './components/Footer';
import Accreditation from './pages/Accreditation';
import Nav from './components/Header';
import About from './pages/About';
import RealHome from './pages/RealHome';

// ✅ Define your Google OAuth client ID here
const googleClientId = "276637808660-kk6cgaucqm3iqvqfl84lka3lha8fvcj8.apps.googleusercontent.com";

function App() {
  const location = useLocation();

  const hideLayout = ["/signin", "/signup"].includes(location.pathname)
  const hideLayout1 = ["/signin", "/signup", "/home"].includes(location.pathname)

  return (
    <div className=''>
      <GoogleOAuthProvider clientId={googleClientId}>
        {!hideLayout && <Nav />}

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/home" element={<RealHome />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Dashbord" element={<Dashbord />} />
          <Route path="/Signin" element={<Signup />} />
          <Route path="/About" element={<About />} />
          <Route path="/Signup" element={<Signup />} />
          <Route path="/Accreditation" element={<Accreditation />} />
        </Routes>

        {!hideLayout1 && <Footer />}
      </GoogleOAuthProvider>
    </div>
  )
}

export default App
