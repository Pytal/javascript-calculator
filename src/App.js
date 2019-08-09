import React from 'react';
import { BingHook, CalcHook } from './hooks/hooks';
import { trigger } from './functions/functions';
import './App.css';


// TODO: 👉 replace eval() with function
//       👉 wrap onClick functions into single function
//       👉 implement smooth text animations
//       👉 implement calc history entry display component
//       👉 rewrite styles with styled-components

// BUGS:
// FIXD: ✅ subtract symbol causes display to break line

// WARN: 🚧 unnecessary escape character: \$

// DONE: ✅ implement bing wallpaper
//       ✅ animate text instead of buttons
//       ✅ implement calculator functionality


function CalculatorDisplay() {
  const binghook = BingHook.useContainer();
  const calchook = CalcHook.useContainer();

  return (
    <div className='slate'>
      <img className='wallpaper' src={binghook.wallpaper} alt='' />
      {binghook.loading ? <h1>Loading...</h1> :
      <div className='box'>
        <div id='display'>{calchook.equation}</div>
        <div className='buttons'>
          <button onClick={(e) => { trigger(e); calchook.inputChar(e); }} id='clear'><p id='clearP'>AC</p></button>
          <button onClick={(e) => { trigger(e); calchook.inputChar(e); }} id='divide'><p id='divideP'>÷</p></button>
          <button onClick={(e) => { trigger(e); calchook.inputChar(e); }} id='multiply'><p id='multiplyP'>×</p></button>
          <button onClick={(e) => { trigger(e); calchook.inputChar(e); }} id='subtract'><p id='subtractP'>-</p></button>
          <button onClick={(e) => { trigger(e); calchook.inputChar(e); }} id='add'><p id='addP'>+</p></button>
          <button onClick={(e) => { trigger(e); calchook.inputChar(e); }} id='equals'><p id='equalsP'>=</p></button>
          <button onClick={(e) => { trigger(e); calchook.inputChar(e); }} id='zero'><p id='zeroP'>0</p></button>
          <button onClick={(e) => { trigger(e); calchook.inputChar(e); }} id='one'><p id='oneP'>1</p></button>
          <button onClick={(e) => { trigger(e); calchook.inputChar(e); }} id='two'><p id='twoP'>2</p></button>
          <button onClick={(e) => { trigger(e); calchook.inputChar(e); }} id='three'><p id='threeP'>3</p></button>
          <button onClick={(e) => { trigger(e); calchook.inputChar(e); }} id='four'><p id='fourP'>4</p></button>
          <button onClick={(e) => { trigger(e); calchook.inputChar(e); }} id='five'><p id='fiveP'>5</p></button>
          <button onClick={(e) => { trigger(e); calchook.inputChar(e); }} id='six'><p id='sixP'>6</p></button>
          <button onClick={(e) => { trigger(e); calchook.inputChar(e); }} id='seven'><p id='sevenP'>7</p></button>
          <button onClick={(e) => { trigger(e); calchook.inputChar(e); }} id='eight'><p id='eightP'>8</p></button>
          <button onClick={(e) => { trigger(e); calchook.inputChar(e); }} id='nine'><p id='nineP'>9</p></button>
          <button onClick={(e) => { trigger(e); calchook.inputChar(e); }} id='decimal'><p id='decimalP'>.</p></button>
        </div>
      </div>
      }
    </div>
  )
};

function Display() {
  return (
    <BingHook.Provider>
      <CalcHook.Provider>
        <CalculatorDisplay />
      </CalcHook.Provider>
    </BingHook.Provider>
  )
};

export default Display;
