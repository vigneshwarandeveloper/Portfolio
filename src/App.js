import './App.css';
import {Home} from "./pages/Home" ;
import {About} from "./pages/About" ;
import {Projects} from "./pages/Projects"; 
import {Contact} from "./pages/Contact"; 
import {Footer} from "./pages/Footer"; 
import {Sidebar} from "./component/Sidebar"; 
import { Navbar } from './component/Navbar';
import { useState } from 'react';


function App() {
  const [isopen,setisopen]=useState(false)
  
  const opensidebar=()=>{
    setisopen(true)
  }
  const closesidebar=()=>{
    setisopen(false)
  }
  return (
    <div className='port'>
    <Navbar  
    isopen={isopen}
    opensidebar={opensidebar}/>
    <Sidebar 
      isopen={isopen}
      closesidebar={closesidebar}
    />
    <Home /> 
    <About />
    <Projects />
    <Contact />
    <Footer />
    </div>
  );
}

export default App;
