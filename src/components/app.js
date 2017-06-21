import React from 'react';
import Encoder from './encoder/encoderApp';
import Header from './header/header';

export default function App(){
  return(
    <div>
      <Header />
      <Encoder />
    </div>
  );
}