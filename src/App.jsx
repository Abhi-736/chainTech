import { useState } from 'react'
import Login from './Login';
import Header from './Header'
import Registration from './Registration'
import './App.css';
import {Route,Routes,  BrowserRouter as Router} from 'react-router-dom'

function App() {

  return (
    <>
    <Router>
      <Header/>
      <Routes>
      <Route path='/' element={<Login/>}/>
     <Route path='/Registration' element={<Registration/>}/>
     </Routes>
     </Router>
    </>
  )
}

export default App
