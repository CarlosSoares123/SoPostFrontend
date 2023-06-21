import {  BrowserRouter as Router, Routes ,Route } from 'react-router-dom';

import { GlobalApp } from './AppStyledGlobal.js';
import { Home } from './pages/Home/Home.jsx';
import { Login } from './pages/Login/Login.jsx';
import { Register } from './pages/Register/Register.jsx';
import { SoHome } from './pages/SoHome/SoHome.jsx';
import { SoProfile } from './pages/SoProfile/SoProfile.jsx';


function App() {

  return (
    <>
    <GlobalApp/>
    <Router>
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/login' element={<Login/>}></Route>
        <Route path='/register' element={<Register/>}></Route>
        <Route path='/home' element={<SoHome/>}></Route>
        <Route path='/home/profile' element={<SoProfile/>}></Route>
    </Routes>
    </Router>
    </>
  )
}

export default App
