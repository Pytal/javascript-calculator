import { useState, useEffect } from 'react';
import { createContainer } from 'unstated-next';
import { rounder } from '../functions/functions';
import { BINGURL } from '../globals/globals';


const BingHook = createContainer(useBingHook);
function useBingHook() {
  const [wallpaper, setWallpaper] = useState('');
  const [loading, setLoading] = useState(true);

  async function getWallpaper() {
    const res = await fetch( 'https://cors-anywhere.herokuapp.com/' + BINGURL );
    const json = await res.json();
    setWallpaper('https://bing.com' + json.images[0].url);
    setLoading(false);
  };

  useEffect(() => getWallpaper(), []);

  return { wallpaper, loading };
};

const CalcHook = createContainer(useCalcHook);
function useCalcHook() {
  const initialState = '0';
  const [expr, setExpr] = useState(initialState);
  const opersReg = new RegExp('\\÷|\\×|\\-|\\+', 'g');
  const opersRegEnd = new RegExp('\\÷|\\×|\\-|\\+$', 'g');
  const opers = {
    '÷': '/',
    '×': '*',
    '-': '-',
    '+': '+'
  };

  function inputChar(event) {
    const char = document.querySelector('#' + event.target.id + 'P').innerHTML;
    const endChar = expr[expr.length - 1];
    const splitExpr = expr.split(opersReg).filter( a => a !== '' );
    const currNum = splitExpr[splitExpr.length - 1];

    (char === 'AC') ? setExpr(initialState) :
    (expr.length === 1) ? (char === '.') ? setExpr( expr => expr.concat(char) ) :
                          (char === '=') ? setExpr( expr ) :
                          setExpr( expr => expr.replace(/0/, '').concat(char) ) :
    (char === '.' && currNum.includes('.')) ? setExpr( expr ) :
    (char in opers && endChar in opers && char !== '-') ?
      setExpr( expr => expr.replace(opersRegEnd, '').concat(char) ) :
    (char === '=') ? // eslint-disable-next-line
      setExpr( rounder(eval(expr.replace(opersReg, (match) => opers[match]))).toString() ) :
    setExpr( expr => expr.concat(char) );
  };

  return { expr, inputChar };
};

export { BingHook, CalcHook };
