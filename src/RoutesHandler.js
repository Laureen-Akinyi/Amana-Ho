import React from 'react';
import Doctors from './Components/Doctors';
import About from './Components/About';
import { Routes, Route } from "react-router-dom";
import App from './App';

function RoutesHandler() {
    return (
        <div>
           
           <Routes>
                <Route exact path='/' element={<App/>}/>
                <Route exact path='/home' element={<App/>}/>
                <Route exact path='/doctors' element={<Doctors/>}/>
                <Route exact path='/about' element={<About/>}/>
            </Routes>
        </div>

    )
}


export default RoutesHandler