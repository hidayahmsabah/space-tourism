import React, { useState } from "react";
import { Wrapper, ContentLeft, ContentRight } from "./Destination.styles";
import Data from "../../assets/data.json";

const Destination = ({ className, id }) => {
  const [destinationState, setDestinationState] = useState(
    Data.destinations[0]
  );

  function changeDestination(index) {
    setDestinationState(Data.destinations[index]);
  }

  return (
    <Wrapper className={className} id={id}>
      <ContentLeft>
        <h5>
          <b className="numbering">01</b> Pick your destination
        </h5>
        <img
          src={
            require(`../../assets/destination/image-${destinationState.name.toLowerCase()}.webp`)
              .default
          }
          alt={`The ${destinationState.name}`}
        />
      </ContentLeft>
      <ContentRight>
        <ul>
          {Data.destinations.map((el, index) => {
            return (
              <li key={index}>
                <button
                  onClick={() => changeDestination(index)}
                  className={`${el.name === destinationState.name && "active"}`}
                >
                  {el.name}
                </button>
              </li>
            );
          })}
        </ul>
        <h2>{destinationState.name}</h2>
        <p>{destinationState.description}</p>
        <hr />
        <div className="extra">
          <div>
            <div className="head">Avg. Distance</div>
            <h3 className="data">{destinationState.distance}</h3>
          </div>
          <div>
            <div className="head">Est. travel time</div>
            <h3 className="data">{destinationState.travel}</h3>
          </div>
        </div>
      </ContentRight>
    </Wrapper>
  );
};

export default Destination;
