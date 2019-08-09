import React from 'react';
import { BingHook, CalcHook } from './hooks/hooks';
import { trigger } from './functions/functions';
import './App.css';


// TODO: 👉 replace eval() with function
//       👉 add regex to check decimal exist between operators
//       👉 implement smooth text animations
//       👉 implement calc history entry display component
//       👉 rewrite styles with styled-components

// BUGS: ✅ subtract symbol causes display to break line

// DONE: ✅ implement bing wallpaper
//       ✅ animate text instead of buttons
//       ✅ implement calculator functionality
//       ✅ wrap onClick functions into single click function
//       ✅ define separate background display component
//       ✅ round equation results


function CalculatorDisplay() {
  const calchook = CalcHook.useContainer();

  const click = (event) => {
    trigger(event);
    calchook.inputChar(event);
  };

  return (
    <div className='box'>
      <div id='display'>{calchook.equation}</div>
      <div className='buttons'>
        <button onClick={click} id='clear'><p id='clearP'>AC</p></button>
        <button onClick={click} id='divide'><p id='divideP'>÷</p></button>
        <button onClick={click} id='multiply'><p id='multiplyP'>×</p></button>
        <button onClick={click} id='subtract'><p id='subtractP'>-</p></button>
        <button onClick={click} id='add'><p id='addP'>+</p></button>
        <button onClick={click} id='equals'><p id='equalsP'>=</p></button>
        <button onClick={click} id='zero'><p id='zeroP'>0</p></button>
        <button onClick={click} id='one'><p id='oneP'>1</p></button>
        <button onClick={click} id='two'><p id='twoP'>2</p></button>
        <button onClick={click} id='three'><p id='threeP'>3</p></button>
        <button onClick={click} id='four'><p id='fourP'>4</p></button>
        <button onClick={click} id='five'><p id='fiveP'>5</p></button>
        <button onClick={click} id='six'><p id='sixP'>6</p></button>
        <button onClick={click} id='seven'><p id='sevenP'>7</p></button>
        <button onClick={click} id='eight'><p id='eightP'>8</p></button>
        <button onClick={click} id='nine'><p id='nineP'>9</p></button>
        <button onClick={click} id='decimal'><p id='decimalP'>.</p></button>
      </div>
    </div>
  )
};

function BackgroundDisplay() {
  const binghook = BingHook.useContainer();

  return (
    <div className='slate'>
      {binghook.loading ? <h1>Loading...</h1> :
      <CalcHook.Provider>
        <img className='wallpaper' src={binghook.wallpaper} alt='' />
        <CalculatorDisplay />
      </CalcHook.Provider>
      }
    </div>
  )
};

function Display() {
  return (
    <BingHook.Provider>
      <BackgroundDisplay />
    </BingHook.Provider>
  )
};

export default Display;
