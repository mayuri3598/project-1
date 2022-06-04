
import React from 'react'
import Home  from './Home';
import Contact from './Contact';
import Service from './Service';
import About from './About';
import {Routes,Route} from "react-router-dom"


const App=() =>{
  return (
    <>
  <Routes>
    <Route exact path="/" component={Home}></Route>
    <Route path="/about" component={About}></Route>
    <Route path="/service" component={Service}></Route>
    <Route path="/contact" component={Contact}></Route>
  </Routes>
   </>
  
  );
}

export default App;
