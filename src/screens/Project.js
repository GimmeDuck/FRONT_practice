import React from 'react'
import '../script.js';
import '../components/Styles/style.css';
import { changeChcolor } from '../script.js';

const Project = () => {
  return (
<div class="main-Div">

   <div class="Character">
   <img src={require("../assets/img/body.png")} style={{ width:400, objectFit:'contain'}}/>
   </div>

   <div class="Character">
     <img src={require("../assets/img/eye/eye1.png")} style={{width:400, objectFit:'contain'}}/>
   </div>

   <div class="Character-color">
   <button class="change-color-White" onClick={()=>{
       changeChcolor("white")
     }}></button>
     <button class="change-color-black" onClick={()=>{
       changeChcolor("black")
     }}></button>
     <button class="change-color-pink" onClick={()=>{
       changeChcolor("pink")
     }}></button>
      <button class="change-color-yellow" onClick={()=>{
       changeChcolor("yellow")
     }}></button>
   </div>
</div>
    
  )
}

export default Project