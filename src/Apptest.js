import logo from './logo.svg';
import './App.css';
import data from "./api/cars.json"
import React, { useState } from "react";
export default function Apptest() {
  return (
   <>
   {data.map((e)=>(
    
     <div className="col-sm-4">
     <div className="thumb-wrapper">
     <span>
       <p>{e.bodyType}</p>
        <h5><b>{e.modelName}</b></h5>
       <p>{e.modelType}</p> </span>
       <div className="img-box"> 
         <img src={e.imageUrl} className="img-fluid" alt=""/>
       </div>
       <div className="thumb-content">
        <a href='#'>LEARN</a> <a href='#'>SHOP</a>
       </div>						
     </div>
   </div>
     ))}
   </>
  );
}