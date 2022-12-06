import * as React from 'react';
import './App.css'
import {Routes, Route} from 'react-router-dom';
import NavBar from './components/navbar/NavBar'
import CssBaseline from '@mui/material/CssBaseline';
import Home from './pages/Home';
import Cart from './pages/Cart';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/cart' element={<Cart />} />
      </Routes>
    </div>
  )
}

export default App
