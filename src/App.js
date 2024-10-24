import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import 'bootstrap-icons/font/bootstrap-icons.css'
import 'remixicon/fonts/remixicon.css'
import{
  BrowserRouter,
  Routes,
  Route,Navigate
}from "react-router-dom";
import Home from './pages/Home/Home.jsx'
import Capteur from './pages/Capteur/index.jsx'
import LoginPage from './pages/LoginPage/Login.jsx'
import Gps from './pages/Capteur/gps.jsx'
import Humidite from './pages/Capteur/Humidite.jsx'
import Lumiere from './pages/Capteur/Lumiere.jsx'
import Vitesse from './pages/Capteur/Vitesse.jsx'
import Temperature from './pages/Capteur/Temperature.jsx'
import Mouvement from './pages/Capteur/Mouvement.jsx'  
function App() {
  
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<Home/>}/>
            <Route path='Capteur'>
              <Route index element={<Capteur/>}/>
              <Route path='Capteur/Gps' element={<Gps/>}/>
              <Route path='Capteur/humidite' element={<Humidite/>}/>
              <Route path='Capteur/Luminosite' element={<Lumiere/>}/>
              <Route path='Capteur/Vitesse' element={<Vitesse/>}/>
              <Route path='Capteur/Temperature' element={<Temperature/>}/>
              <Route path='Capteur/Mouvement' element={<Mouvement/>}/>
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}
//<Route path="/login" component={LoginPage} />
//<Route path="/home" element={isAuthenticated ? <Home /> : <Navigate to="/login" />} />
//<Route path="*" element={<Navigate to="/login" />} />
export default App;
