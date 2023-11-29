import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Components/Home/Home';
import Header from './Components/Header/Header';
import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer';
import Body from './Components/Body/Body';
import List from './Components/List';
import Practice from './Components/Practice/Practice';

function App(){ 
  return(
  <>
    <BrowserRouter>
    <Home />
      <Routes>
        <Route path='/header' element={<Header />}/>{/* sujith */}
        <Route path='/navbar' element={<Navbar />}/>  {/* surendra */}
        <Route path='/footer' element={<Footer />}/>{/*Surekha */}
        <Route path='/body' element={<Body />}/> {/* Jyothi*/}
        <Route path='/practice' element={<Practice />}/> {/* Sekhar */}
        <Route path='/list' element={<List />}/>{/* Vanaja */}
      </Routes>
    </BrowserRouter>
  </>
    
  )
}
export default App;
