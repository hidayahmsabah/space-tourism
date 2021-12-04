import { useState } from "react";
import { GlobalStyles } from "./GlobalStyles";
import Homepage from "./components/Homepage";
import Navbar from "./components/Navbar";
import Destination from "./components/Destination";
import CrewSecond from "./components/CrewSecond";
import Technology from "./components/Technology";
import useWindowResize from "./hooks/useWindowResize";

function App() {
  const [width, height] = useWindowResize();
  const [len, setLen] = useState(0);
  const pagePoint = [];

  for (let i = 1; i < 4; i++) {
    pagePoint.push(height * i);
  }

  function scroll(e) {
    let lenArray = pagePoint.filter((el) => e.target.scrollTop > el);
    setLen(lenArray.length);
  }

  return (
    <>
      <main id="main" onScroll={(e) => scroll(e)}>
        <Navbar len={len} />
        <Homepage className="page" id="home" />
        <Destination className="page" id="destination" />
        <CrewSecond className="page" id="crew" />
        <Technology className="page" id="technology" width={width} />
      </main>
      <GlobalStyles />
    </>
  );
}

export default App;
