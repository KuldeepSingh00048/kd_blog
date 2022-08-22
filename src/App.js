import React from 'react';
import Navbar from './components/Navbar';
import Home from './components/home';
import Temples from './components/temples';
import Park from './components/park';
import Mines from './components/mines';
import Zoo from './components/zoo';
import Footer from './components/footer';
import Review from './components/review';
import {Routes,Route} from "react-router-dom";


function App() {
  return (

<>
    <Navbar />
      <Routes>
        <Route exact path="/"  element={<Home/>} />
      
        <Route path='/temples' element={<Temples/>} />
       
        <Route path='/mines' element={<Mines/>} />
         
        <Route path='/zoo' element={<Zoo/>} />

        <Route path='/park' element={<Park/>} />
       
        <Route path='/review' element={< Review/>} />

      </Routes> 
      <Footer />
    </>
    );
}

export default App;
