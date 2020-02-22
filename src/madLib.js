import React, { useState, setState } from "react";
import styled from "styled-components";

const inBox = document.querySelector(".inputBox")
const defObj = {
  1:{
    'value': "",
    'name': " noun",
    'ex': 'pig'
  },
  2:{
    'value': "",
    'name': "nother noun",
    'ex': 'food'
  },
  3:{
    'value': "",
    'name': " verb",
    'ex': 'taste'
  },
  4:{
    'value': "",
    'name': "n adjective",
    'ex': 'cold'
  }
}
export default function MadLibComp() {
  var inputting = true;
  const [index, setIndex] = useState(1)
  const tester = "Tester"
  var [userValues, setVal] = useState(defObj);

function placeChange(){
  const inBox = document.querySelector(".inputBox")
  setIndex(index+1)
  inBox.value = ""
  
  
  
}
window.addEventListener("keypress", function(e){
  if(e.key === "Enter"){
    placeChange()
  }
})
function restartScreen(){
  setIndex(1)
  setVal(defObj)
}

if(index<=4){
  return (
    <div class="text-center">
      <div id="insertVal">Type a{userValues[index].name}</div>
    <input class="inputBox" onChange={e => setVal({...userValues, [index]: {'value': e.target.value, 'name': userValues[index].name}})} type="text" name="firstName" placeholder={userValues[index].ex}/>
    
    <div id="insertVal">then press Enter 
    <br>
    </br>
    <span>{index < 4 ? '' : 'One More!'}</span>
    </div>
    
    <br></br>
    </div>
    
  );
}
else{
  return (
    <div class="text-center">
      <div class="inputBox"></div>
      <div class="storyWall">
      <h1>Your Story</h1>
      <br>
      </br>
      When I saw the monkey king <strong>{userValues[3].value}</strong>. I ran away to the very <strong>{userValues[4].value}</strong> <strong>{userValues[1].value}</strong>. I then played chess on my <strong>{userValues[2].value}</strong>.
    <br></br><br></br>
    {}
      <button class='btn btn-return' onClick={restartScreen}>Restart</button>
      </div>
      
    </div>
  )
}



}

