import React from "react";
import './home.css';

import { HomeContent } from 'src/components/homeContent/HomeContent';
import { BlueSquare } from 'package-c';

const Home = () => {
  return <>
    <h1 id='title'>Package B</h1>
    <HomeContent />
    <BlueSquare />
  </>
}

export default Home;
