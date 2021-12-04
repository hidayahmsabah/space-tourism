import styled from "styled-components";

export const Wrapper = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  background-color: var(--grey);
  -webkit-backdrop-filter: blur(100px);
  backdrop-filter: blur(100px);
  width: ${({ nav }) => (nav ? "60vw" : "0")};
  height: 100vh;
  z-index: -1;
  transition: width 0.5s ease;
`;

export const Content = styled.ul`
  padding: 10vh 0;
  list-style-type: none;
  color: var(--white);

  li {
    font-size: 1.5em;
    margin: 1em 0;
    padding-left: 2em;
    line-height: 1.3em;
    transition: border 0.3s ease;

    a {
      display: inline-block;
      width: 100%;
      text-decoration: none;
      color: inherit;
    }

    b {
      padding-right: 0.3em;
    }

    :hover {
      border-right: solid thick var(--grey);
    }

    &.active {
      border-right: solid thick var(--white);
    }
  }

  @media screen and (max-width: 375px) and (max-height: 800px) {
    li {
      padding-left: 1em;
      font-size: 1.3em;
    }
  }
`;
