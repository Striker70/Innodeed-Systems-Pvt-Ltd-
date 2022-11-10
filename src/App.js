import React, { Component, useEffect, useState } from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
//import {Carousel} from '3d-react-carousal';
import "./App.css";
import data from "./cars.json";

export default function App () {
  const callback = function(index){
    console.log("callback",index);
}
   const cars =[
        <img src="./images/s60_recharge.jpg" alt ="1"></img>,
        <img src= "./images/xc60_recharge.jpg" alt ="2"></img>,
        <img src="./images/xc40_recharge.jpg" alt ="3"></img>,
        <img src="./images/xc40_bev.jpg" alt ="4"></img>,
        <img src="./images/v60_recharge.jpg" alt ="5"></img>,
        <img src="./images/s90_recharge.jpg" alt ="6"></img>,
        <img src="./images/s60_recharge.jpg" alt="7"></img>,
        <img src="./images/v90_recharge.jpg" alt="8"></img>
   ]
     

   
   const responsive = {
    0: { items: 1 },
    1024: { items: 2 }
  };
    return (
      <div>
        {data
        .map((val, key) => {
          return (
            <div className="dis" key={key}>
              <ul>
                <li>{val.modelName}</li>
                <li>{val.bodyType}</li>
                <li>{val.modelType}</li>
              </ul>
            </div>
          );
        })} 
        <AliceCarousel
      items={cars}
          responsive={responsive}
          autoPlayInterval={1000}
          autoPlayDirection="rtl"
          mouseTracking
          autoPlay={true}
          fadeOutAnimation={true}
          mouseTrackingEnabled={true}
          disableAutoPlayOnAction={true}
        />

        <h1>Another type design</h1>
      
        {/*<Carousel slides={cars} autoplay={true} interval={1000} onSlideChange={callback}/>*/}
        {/* this is the anoter 3d model design which i tried but because of npm and react latest version
        this version of npm doesnot work. you can check by clicking this link https://www.npmjs.com/package/3d-react-carousal */}



      </div>
    );
  }
