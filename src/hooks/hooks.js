import { useState, useEffect } from 'react';
import { createContainer } from 'unstated-next';
import { BINGURL } from '../globals/globals';


const BingHook = createContainer(useBingHook);
function useBingHook() {
  const [wallpaper, setWallpaper] = useState('hi');

  useEffect(() => {
    const getWallpaper = async () => {
      console.log('starting fetch')
      const res = await fetch( BINGURL );
      const json = await res.json();
      console.log('fetched')
      console.log(json);
      setWallpaper('');
    };
    getWallpaper();  
  }, [] );

  return { wallpaper };
};

export { BingHook };
