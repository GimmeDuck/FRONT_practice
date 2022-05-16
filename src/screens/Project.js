import React, { useState } from 'react'
import '../script.js';
import '../components/Styles/style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button} from "react-bootstrap";

  const yellow=require('../assets/img/body.png')
  const blue =require('../assets/img/body2.png')
  const red = require('../assets/img/body3.png')
  const green =require('../assets/img/body4.png')
  const body = {yellow,blue,red,green}

  const Bhair=require('../assets/img/hair/hair1.png')
  const Yhair=require('../assets/img/hair/hair2.png')
  const Blhair=require('../assets/img/hair/hair3.png')
  const Ghair=require('../assets/img/hair/hair4.png')
  const hair={Bhair,Yhair,Blhair,Ghair}

const Project = () => {
const [select,setSelect]=useState(body.yellow);
const [selecthair,setSelectHair]=useState(body.Blhair);
const [visible, setVisible] = React.useState(true);
const [hvisible, sethVisible] = React.useState(false);
  
  return (
    //전체 div
    <div>

      
      <div class="Character-clothes"onClick={()=>{
       setVisible(true);
       sethVisible(false);
     }}> 
        <Button size="lg" variant="secondary" style={{float:'right',width:'50%',height:'50%'}}>body</Button>
      </div>


      <div class="Character-clothes-1" onClick={()=>{
        setVisible(false);
        sethVisible(true); 
     }}>
         <Button size="lg" variant="dark"style={{float:'right',width:'50%',height:'50%'}}>hair</Button>
      </div>

      <div class="Character-clothes-2" onClick={()=>{
       console.log("blue")   
     }}>
        <Button size="lg" variant="primary"style={{float:'right',width:'50%',height:'50%'}}>egg</Button>
      </div>
      
<div class="main-Div">

<div className="Character">
  <img src={select}  id="chara-img" style={{ width:'100%',height:'100%', objectFit:'contain'}}/>   
   </div>

   <div className='Character-1' >
   <img src={selecthair} id="chara-img" style={{ width:'100%',height:'100%', objectFit:'contain'}}/>
   </div>
   {visible  && <div class="Character-color button">
   
   <button class="change-color-yellow" onClick={()=>{
       setSelect(body.yellow)       
     }}></button>
   <button class="change-color-blue" onClick={ ()=>{
       setSelect(body.blue)
     }}></button>
     <button class="change-color-red" onClick={()=>{
       setSelect(body.red)
     }}></button>
     <button class="change-color-green" onClick={()=>{
        setSelect(body.green)
     }}></button>
     
</div>}


{hvisible  && <div class="Character-color button">
   
   <button class="change-color-black" onClick={()=>{
       setSelectHair(hair.Bhair)       
     }}></button>
   <button class="change-color-blue" onClick={ ()=>{
       setSelectHair(hair.Blhair)
     }}></button>
     <button class="change-color-green" onClick={()=>{
       setSelectHair(hair.Ghair)
     }}></button>
     <button class="change-color-yellow" onClick={()=>{
        setSelectHair(hair.Yhair)
     }}></button>
     
</div>}

      
      
</div>
</div>
  )
}

export default Project