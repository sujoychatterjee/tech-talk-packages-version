import React from "react";
import './home.css';

import { HomeContent } from 'src/components/homeContent/HomeContent';
import { YellowSquare } from 'package-c';

const Home = () => {
  return <>
    <h1 id='title'>Package A</h1>
    <HomeContent />
    <YellowSquare />
  </>
}

export default Home;
