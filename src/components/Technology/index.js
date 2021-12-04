import React, { useState } from "react";
import { Wrapper, Head, Content, Nav, Button } from "./Technology.styles";
import Data from "../../assets/data.json";

const Technology = ({ className, id, width }) => {
  const [current, setCurrent] = useState(0);

  function changeCurrent(index) {
    setCurrent(index);
  }

  return (
    <Wrapper className={className} id={id}>
      <Head>
        <h5>
          <b className="numbering">03</b> Space Launch 101
        </h5>
      </Head>
      <Content>
        <Nav>
          {Data.technology.map((el, index) => {
            return (
              <Button
                key={index}
                extra={index === current && true}
                index={index}
                el={el}
                onClick={() => changeCurrent(index)}
              >
                {index + 1}
              </Button>
            );
          })}
        </Nav>
        {Data.technology.map((el, index) => {
          if (index === current) {
            return (
              <div key={index} className="terms">
                <h6>The terminology...</h6>
                <h3>{el.name}</h3>
                <p>{el.description}</p>
              </div>
            );
          } else {
            return false;
          }
        })}

        {Data.technology.map((el, index) => {
          if (index === current) {
            return (
              <img
                key={index}
                src={
                  require(`../../assets/technology/image-${el.name
                    .toLowerCase()
                    .replace(" ", "-")}-${
                    width > 850 ? "portrait" : "landscape"
                  }.jpg`).default
                }
                alt={el.name}
              />
            );
          } else {
            return false;
          }
        })}
      </Content>
    </Wrapper>
  );
};

export default Technology;
