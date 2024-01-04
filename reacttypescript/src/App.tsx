import React, { useState } from 'react';
import { useEffect } from 'react';
import './App.css';
import GetEployeesCompo from './components/GetListEmployeeCompo'
import GetAnEmployeeCompo from './components/AEmployeeCompo'
import UpdateEmployeeCompo from './components/ChangeEmployeeCompo'
import PostEmployeeCompo from './components/PostComponent'
import DeleteEmployeeCompo from './components/DeleteEmployeeCompo'
import LoginComponent from './components/LoginComponent';
import Navbarhtml from './components/NavBar'
import {Route, Routes} from 'react-router-dom'

function App() {
  const [accessGranted, setAccessGranted] = useState(false);
  return (
    <div className='App'>
      <Navbarhtml/>
      <Routes>
        <Route path='/' element={<GetEployeesCompo/>}/>
        <Route path='/getAnEmployee' element={<GetAnEmployeeCompo/>}/>
        <Route path='/update' element={<UpdateEmployeeCompo/>}/>
        <Route path='/post' element={<PostEmployeeCompo/>}/>
        <Route path='/delete' element={<DeleteEmployeeCompo/>}/>
        <Route path='/login' element={<LoginComponent/>}/>


      </Routes>


    </div>
  );
}

export default App;
