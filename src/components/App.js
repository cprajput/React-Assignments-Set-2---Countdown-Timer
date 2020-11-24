import React, { Component, useState, useEffect } from "react";
import '../styles/App.css';

const App = () => {
  // write your code here 
  const [countdown,setCountDown] = useState(0);
  const [timer,setTimer] = useState(false);
  const handleKeyDown =(event) =>{
    if(event.keyCode === 13){
      setTimer(true);
    event.target.value=null;
    }
    
  }

  const handleChange = (event) =>{
    if(isNaN(event.target.value)){
      setCountDown(0);
    }
    setCountDown(Math.trunc(event.target.value));
    setTimer(false);
  }
  useEffect(()=>{
    if(timer && countdown>0){
      setTimeout(()=>{
        setCountDown(countdown-1);
      },1000)
    } 
  })
  return (
    <div className="wrapper">
      <div id="whole-center">
        <h1>
          Reverse countdown for
          <input id="timeCount" onKeyDown={handleKeyDown} onChange={handleChange} /> sec.
        </h1>
      </div>
      <div id="current-time">{countdown}</div>
    </div>
  )
}


export default App;
