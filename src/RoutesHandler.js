import React from 'react';
import Doctors from './Components/Doctors';
import About from './Components/About';
import Navbar from './Components/Navbar';
import { Routes, Route } from "react-router-dom";
import App from './App';
import Contact from './Components/Contact Us';

function RoutesHandler() {
    return (
        <div>
           
           <Routes>

               
                <Route exact path='/' element={<App/>}/>
                {/* <Route exact path='/' element={<App/>}/> */}
                <Route exact path='/doctors' element={<Doctors/>}/>
                <Route exact path='/about' element={<About/>}/>
                <Route exact path='/contact' element={<Contact/>}/>
                <Route exact path='/navbar' element={<Navbar/>}/>
            </Routes>
        </div>

    )
}


export default RoutesHandler