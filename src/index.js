import React from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";
import MadLibComp from "./madLib.js";
import { isWhiteSpaceLike } from "typescript";
import Zfont from 'zfont';

const Backing = styled.div`


    background-color: #202020;
    color: #fff;


`
//this function that returns html (aka a component) is the wrapper for our whole app
//inside of it is another component called Counter... you can find the Counter
//component inside the src folder to the left. Go open it up and see what's inside


function App() {
  
  return (

    <div>
      <MadLibComp />
    </div>

  );
}
function Title(){
  
  return (
    <canvas class="zdog-canvas"></canvas>
  )
}
const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

