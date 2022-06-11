import React from "react"
import Header from './components/Header'
import {Routes,Route} from "react-router-dom"
import Home from "./components/Home"
import About from "./components/About.js"
import OurTeam from "./components/OurTeam"
import Study from "./components/Study"
import Gallery from "./components/Gallery"
import ContactUs from "./components/ContactUs"



function App(){
  return(
    <div>
    <Header/>
    <Routes>
      <Route path='/'element={<Home/>} />
      <Route path='/about' element={<About/>} />
      <Route path='/ourTeam'element={<OurTeam/>} />
      <Route path='/study'element={<Study/>} />
      <Route path='/gallery'element={<Gallery/>} />
      <Route path='/contactUs'element={<ContactUs/>} />
    </Routes>
    </div>
  );
}
  export default App


      
    
  




