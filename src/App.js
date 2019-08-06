import React from 'react';
import { BingHook } from './hooks/hooks';
import { trigger } from './functions/functions';
import './App.css';


// TODO: 👉 parse bing wallpaper url
//       👉 add button animations

// DONE:


function CalculatorBox() {
  const binghook = BingHook.useContainer();

  return (
    <div className='slate' style={{ backgroundImage: 'url('+ binghook.wallpaper + ')' }}>
      <div className='box'>
        <div id='display'>123</div>
        <div className='buttons'>
          <button onClick={trigger} id='clear'>AC</button>
          <button onClick={trigger} id='divide'>/</button>
          <button onClick={trigger} id='multiply'>x</button>
          <button onClick={trigger} id='subtract'>-</button>
          <button onClick={trigger} id='add'>+</button>
          <button onClick={trigger} id='equals'>=</button>
          <button onClick={trigger} id='zero'>0</button>
          <button onClick={trigger} id='one'>1</button>
          <button onClick={trigger} id='two'>2</button>
          <button onClick={trigger} id='three'>3</button>
          <button onClick={trigger} id='four'>4</button>
          <button onClick={trigger} id='five'>5</button>
          <button onClick={trigger} id='six'>6</button>
          <button onClick={trigger} id='seven'>7</button>
          <button onClick={trigger} id='eight'>8</button>
          <button onClick={trigger} id='nine'>9</button>
          <button onClick={trigger} id='decimal'>.</button>
        </div>
      </div>
    </div>
  )
};

function Display() {
  return (
    <BingHook.Provider>
      <CalculatorBox />
    </BingHook.Provider>
  )
};

export default Display;
