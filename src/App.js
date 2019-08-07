import React from 'react';
import { BingHook } from './hooks/hooks';
import { trigger } from './functions/functions';
import './App.css';


// TODO: 👉 implement smooth text animations
//       👉 implement calculator functionality

// DONE: ✅ implement bing wallpaper
//       ✅ animate text instead of buttons


function CalculatorBox() {
  const binghook = BingHook.useContainer();

  return (
    <div className='slate'>
      <img className='wallpaper' src={binghook.wallpaper} alt='' />
      {binghook.loading ? <h1>Loading...</h1> :
      <div className='box'>
        <div id='display'>123</div>
        <div className='buttons'>
          <button onClick={trigger} id='clear'><p id='clearP'>AC</p></button>
          <button onClick={trigger} id='divide'><p id='divideP'>/</p></button>
          <button onClick={trigger} id='multiply'><p id='multiplyP'>x</p></button>
          <button onClick={trigger} id='subtract'><p id='subtractP'>-</p></button>
          <button onClick={trigger} id='add'><p id='addP'>+</p></button>
          <button onClick={trigger} id='equals'><p id='equalsP'>=</p></button>
          <button onClick={trigger} id='zero'><p id='zeroP'>0</p></button>
          <button onClick={trigger} id='one'><p id='oneP'>1</p></button>
          <button onClick={trigger} id='two'><p id='twoP'>2</p></button>
          <button onClick={trigger} id='three'><p id='threeP'>3</p></button>
          <button onClick={trigger} id='four'><p id='fourP'>4</p></button>
          <button onClick={trigger} id='five'><p id='fiveP'>5</p></button>
          <button onClick={trigger} id='six'><p id='sixP'>6</p></button>
          <button onClick={trigger} id='seven'><p id='sevenP'>7</p></button>
          <button onClick={trigger} id='eight'><p id='eightP'>8</p></button>
          <button onClick={trigger} id='nine'><p id='nineP'>9</p></button>
          <button onClick={trigger} id='decimal'><p id='decimalP'>.</p></button>
        </div>
      </div>
      }
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
