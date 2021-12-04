import React from "react";
import { Image } from "./CrewInfo.styles";

const CrewInfo = ({
  crewState,
  className,
  onTouchStart,
  onTouchMove,
  onTouchEnd,
}) => {
  return (
    <Image
      className={className}
      onTouchStart={(e) => onTouchStart(e)}
      onTouchMove={(e) => onTouchMove(e)}
      onTouchEnd={onTouchEnd}
    >
      <div className="crew-info">
        <h4>{crewState.role}</h4>
        <h2>{crewState.name}</h2>
        <p>{crewState.bio}</p>
      </div>
      <img
        src={
          require(`../../assets/crew/image-${crewState.name
            .toLowerCase()
            .replace(" ", "-")}.webp`).default
        }
        alt={crewState.name}
      />
    </Image>
  );
};

export default CrewInfo;
