import React from 'react';
import './App.css';
import Navbar from './Container/Navbar';
import Leftcontent from'./Container/Leftcontent';
import Rightcontent from'./Container/Rightcontent';
import Centercontent from'./Container/Centercontent';
import CenterHalf from'./Container/CenterHalf';
import Messenger from './Container/Messenger';

function App() {
  return (
    <div class="div-col">
    <Navbar />
    <div class="div-row">
      <Leftcontent />
      <Messenger />
      <Centercontent/>
      <CenterHalf />
      
      <Rightcontent />
     

    
    </div>
    </div> 
     
  );
}




export default App;
