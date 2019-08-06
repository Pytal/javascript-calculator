import { useState, useEffect } from 'react';
import { createContainer } from 'unstated-next';
import { BINGURL } from '../globals/globals';


const BingHook = createContainer(useBingHook);
function useBingHook() {
  const [wallpaper, setWallpaper] = useState('hi');

  useEffect(() => {
    const getWallpaper = async () => {
      const res = await fetch( 'https://cors-anywhere.herokuapp.com/' + BINGURL );
      const json = await res.json();
      console.log('bing.com' + json.images[0].url);
      setWallpaper('');
    };
    getWallpaper();  
  }, []);

  return { wallpaper };
};

export { BingHook };
