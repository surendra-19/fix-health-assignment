import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home'
import Navbar from './components/Navbar';
import './App.css';
import Bookings from './pages/Bookings';

function App() {
  return (
    <div className='container'>
      <Router>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path='/booknow' element={<Bookings/>}/>
        </Routes>
      </Router>
      
    </div>
  )
}

export default App