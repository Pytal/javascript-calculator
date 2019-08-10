import React from 'react';
import { BingHook, CalcHook } from './hooks/hooks';
import { trigger } from './functions/functions';
import './App.css';


// TODO:

// BUGS: ✅ subtract symbol causes display to break line

// DONE: ✅ implement bing wallpaper
//       ✅ animate text instead of buttons
//       ✅ implement calculator functionality
//       ✅ wrap onClick functions into single click function
//       ✅ define separate background display component
//       ✅ round equation results
//       ✅ replace hardcoded buttons html with mappped html
//       ✅ add regex to check for decimal in current number
//       🆗 freeCC Feature Complete
//       ✅ implement smooth char animations


function CalculatorDisplay() {
  const calchook = CalcHook.useContainer();

  const click = (event) => {
    trigger(event);
    calchook.inputChar(event);
  };

  const buttonsArr = [
    ['clear', 'AC'], ['divide', '÷'], ['multiply', '×'],
    ['subtract', '-'], ['add', '+'], ['equals', '='],
    ['zero', 0], ['one', 1], ['two', 2],
    ['three', 3], ['four', 4], ['five', 5],
    ['six', 6], ['seven', 7], ['eight', 8],
    ['nine', 9], ['decimal', '.']
  ];

  return (
    <div className='box'>
      <div id='display'>{calchook.expr}</div>
      <div className='buttons'>
        {buttonsArr.map( a =>
        <button onClick={click} id={a[0]}>
          <p id={a[0] + 'P'}>{a[1]}</p>
        </button>
        )}
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
