import React, { useState } from "react";
import { Wrapper, Content, Slider, Button } from "./CrewSecond.styles";
import Data from "../../assets/data.json";
import CrewInfo from "../CrewInfo";

const Crew = ({ className, id }) => {
  const [current, setCurrent] = useState(0);
  const [startPos, setStartPos] = useState(0);

  let endPos = 0;
  let difference = 0;

  function changeCurrent(index) {
    setCurrent(index);
  }

  function touchStart(e) {
    e && setStartPos(e.touches[0].clientX);
  }

  function touchMove(e) {
    e && (endPos = e.touches[0].clientX);
  }

  function touchEnd() {
    difference = startPos - endPos;
    difference > 0
      ? current < Data.crew.length - 1
        ? setCurrent(current + 1)
        : setCurrent(0)
      : current > 0 && setCurrent(current - 1);
  }

  return (
    <Wrapper className={className} id={id}>
      <Content>
        <h5>
          <b className="numbering">02</b> Meet your crew
        </h5>
        {Data.crew.map((el, index) => {
          return (
            <Button
              key={index}
              extra={index === current && true}
              index={index}
              el={el}
              onClick={() => changeCurrent(index)}
            ></Button>
          );
        })}
      </Content>

      <Slider>
        {Data.crew.map((el, index) => {
          if (index === current) {
            return (
              <CrewInfo
                crewState={el}
                key={index}
                className={index === current ? "crew current" : "crew"}
                onTouchStart={touchStart}
                onTouchMove={touchMove}
                onTouchEnd={touchEnd}
              />
            );
          } else {
            return false;
          }
        })}
      </Slider>
    </Wrapper>
  );
};

export default Crew;
