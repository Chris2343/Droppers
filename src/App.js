import React from 'react';

import { Footer, Blog, Possibility, Features, WhatDroppers, Header } from './containers';
import { CTA, Brand, Navbar } from './components';

import './App.css';

const App = () => (
  <div className="App">
    <div className="gradient__bg">
      <Navbar />
      <Header />
    </div>
    <Brand />
    <WhatDroppers />
    <Features />
    <Possibility />
    <CTA />
    <Blog />
    <Footer />
  </div>
);

export default App;
