import { useState, useLayoutEffect } from "react";

function useWindowSize() {
   const [size, setSize] = useState([window.innerWidth, window.innerHeight]);
   useLayoutEffect(() => {
      function updateSize() {
         setSize([window.innerWidth, window.innerHeight]);
      }
      window.addEventListener("resize", updateSize);
      return () => window.removeEventListener("resize", updateSize);
   }, []);
   //    console.log(size);
   return size;
}
export default useWindowSize;
