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

export { BingHook };
