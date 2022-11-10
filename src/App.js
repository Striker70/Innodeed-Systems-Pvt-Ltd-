import logo from './logo.svg';
import './App.css';
import data from "./api/cars.json"
import React, { useState } from "react";
import Apptest from "./Apptest"
export default function App() {
  return (
   <>
      <div className="container-xl">
    <div className="row">
      <div className="col-md-12 mx-auto">
        <div id="myCarousel" className="carousel slide" data-ride="carousel" data-interval="0">
       
        <ol className="carousel-indicators">
          <li data-target="#myCarousel" data-slide-to="0" className="active"></li>
          <li data-target="#myCarousel" data-slide-to="1"></li>
          <li data-target="#myCarousel" data-slide-to="2"></li>
        </ol>   
      
        <div className="carousel-inner">
          <div className="carousel-item active">
            <div className="row">
             <Apptest/>
            </div>
          </div>
        <a className="carousel-control-prev" href="#myCarousel" data-slide="prev">
          <i className="fa fa-angle-left"></i>
        </a>
        <a className="carousel-control-next" href="#myCarousel" data-slide="next">
          <i className="fa fa-angle-right"></i>
        </a>
      </div>
      </div>
    </div>
  </div>
  </div>
   </>
  );
}
