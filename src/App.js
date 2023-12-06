import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Components/Home/Home';
import Header from './Components/Header/HeaderComponentJs/Header';
import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer';
import Body from './Components/Body/Body';
import List from './Components/List/List';
import Gallery from './Components/Gallery/Gallery';
import Homepage from "./Components/Home/Homepage"
import BillingForm from './Components/Header/HeaderComponentJs/Billing';

function App(){ 
  return(
  <>
    <BrowserRouter>
    <Home />
      <Routes>
      <Route path='/' element={<Homepage />}/>{/* sujith */}
        <Route path='/header' element={<Header />}/>{/* sujith */}
        <Route path='/navbar' element={<Navbar />}/>  {/* surendra */}
        <Route path='/footer' element={<Footer />}/>{/*Surekha */}
        <Route path='/body' element={<Body />}/> {/* Jyothi*/}
        <Route path='/gallery' element={<Gallery />}/> {/* Sekhar */}
        <Route path='/list' element={<List />}/>{/* Vanaja */}
        <Route path='/billing' element={<BillingForm />}/>{/* sujith */}
      </Routes>
    </BrowserRouter>
  </>
    
  )
}
export default App;
