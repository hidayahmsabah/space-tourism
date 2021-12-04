import React from "react";
import { Wrapper, Content, Explore } from "./Homepage.styles";

const Homepage = ({ className, id }) => {
  return (
    <Wrapper className={className} id={id}>
      <Content>
        <div>
          <h5>so, you want to travel to space</h5>
          <h1>space</h1>
          <p>
            Let’s face it; if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we’ll give you a truly out of this
            world experience!
          </p>
        </div>
      </Content>
      <Explore>
        <a href="#destination">
          <div>
            <h3>Explore</h3>
          </div>
        </a>
      </Explore>
    </Wrapper>
  );
};

export default Homepage;
