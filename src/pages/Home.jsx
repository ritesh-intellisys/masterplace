import React from 'react';
import Masterhome from '../components/Masterhome';
import Featuredhomes from '../components/FeaturedHomes';
import Searchform from '../components/Searchform';
import Card from '../components/Card';
import Explore from '../components/Explore';
import Tool from '../components/Tool';

const HomePage = () => {
  return (
    <>
      <Masterhome />
      <Featuredhomes />
      <Searchform />
      <Card />
      <Explore />
      <Tool/>
    </>
  );
};

export default HomePage;