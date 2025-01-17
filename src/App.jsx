import React from 'react';
import "./App.css";
import Header from './components/Header';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from "./components/Home";
import Cart from "./components/Cart";


const App = () => {
  return (
   <BrowserRouter>
    <Header/>
    <Routes>
      <Route path='/' excat  element={(<Home/>)}/>
      <Route path='/cart' element={(<Cart/>)}/>
    </Routes>
   </BrowserRouter>
  )
}

export default App
