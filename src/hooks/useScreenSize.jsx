import { useState, useEffect } from 'react';

function useScreenSize() {
  const [windowWidth, setwindowWidth] = useState(window.innerWidth);
  useEffect(() => {
    const handleResize = () => {
      setwindowWidth(window.innerWidth);
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [windowWidth]);
  return windowWidth;
}

export default useScreenSize;
