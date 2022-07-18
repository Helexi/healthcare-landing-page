import React from "react";
import './Main.css';
import { GetStarted } from "./GetStarted/GetStarted";
import { Mission } from "./Mission/Mission";
import { SwiperSwipe } from "./SwiperSwipe/SwiperSwipe";

export const Main = () => {
  return (
    <main className="main">
      <GetStarted />
      <Mission />
      <SwiperSwipe />
    </main>
  )
}