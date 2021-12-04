import { useState, useLayoutEffect } from "react";

function useWindowResize() {
  const [size, setSize] = useState([0, 0]);

  useLayoutEffect(() => {
    function resize() {
      setSize([window.innerWidth, window.innerHeight]);
    }

    window.addEventListener("resize", resize);
    resize();
    return () => window.removeEventListener("resize", resize);
  }, []);

  return size;
}

export default useWindowResize;
