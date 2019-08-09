import { useState, useEffect } from 'react';
import { createContainer } from 'unstated-next';
import { BINGURL } from '../globals/globals';


const BingHook = createContainer(useBingHook);
function useBingHook() {
  const [wallpaper, setWallpaper] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getWallpaper = async () => {
      const res = await fetch( 'https://cors-anywhere.herokuapp.com/' + BINGURL );
      const json = await res.json();
      setWallpaper('https://bing.com' + json.images[0].url);
      setLoading(false);
    };
    getWallpaper();
  }, []);

  return { wallpaper, loading };
};

const CalcHook = createContainer(useCalcHook);
function useCalcHook() {
  const initialState = '0';
  const [equation, setEquation] = useState(initialState);
  const opers = {
    '÷': '/',
    '×': '*',
    '-': '-',
    '+': '+'
  };
  const opersReg = new RegExp('\\÷|\\×|\\-|\\+', 'g');

  const inputChar = (event) => {
    const char = document.querySelector('#' + event.target.id + 'P').innerHTML;
    const endChar = equation[equation.length - 1];
    const operReg = new RegExp('\\' + endChar + '\$');

    (char === 'AC') ? setEquation(initialState) :
    (equation.length === 1) ? (char === '.') ? setEquation( equation => equation.concat(char) ) :
                              (char === '=') ? setEquation( equation ) :
                              setEquation( equation => equation.replace(/0/, '').concat(char) ) :
    (char === '.' && equation.includes('.')) ? setEquation( equation ) :
    (char in opers && endChar in opers) ? setEquation( equation => equation.replace(operReg, '').concat(char) ) :
    (char === '=') ? setEquation( eval(equation.replace(opersReg, (match) => opers[match])).toString() ) :
    setEquation( equation => equation.concat(char) );
  };

  return { equation, inputChar };
};

export { BingHook, CalcHook };
