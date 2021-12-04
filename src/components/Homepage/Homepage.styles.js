import styled from "styled-components";
import homeDesktop from "../../assets/home/background-home-desktop.jpg";
import homeTablet from "../../assets/home/background-home-tablet.jpg";
import homeMobile from "../../assets/home/background-home-mobile.jpg";

export const Wrapper = styled.div`
  background: center / cover no-repeat url(${homeDesktop});
  display: flex;
  justify-content: space-around;
  align-items: flex-end;

  @media screen and (max-width: 850px) {
    padding-top: 10vh;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    background: center / cover no-repeat url(${homeTablet});
  }

  @media screen and (max-width: 600px) {
    background: center / cover no-repeat url(${homeMobile});
    padding-bottom: 2em;
  }
`;

export const Content = styled.div`
  color: var(--white);
  margin-bottom: 15vh;

  div {
    height: fit-content;

    h1,
    h5 {
      text-transform: uppercase;
    }

    h1 {
      font-size: 9em;
      font-weight: 400;
      line-height: 1.5em;
    }

    h5 {
      font-size: 1.7em;
      font-weight: 200;
    }

    p {
      font-size: 1.1em;
      font-weight: 200;
      line-height: 1.7em;
      width: 25em;
    }
  }

  @media screen and (max-width: 850px) {
    margin-bottom: 3%;

    div {
      width: auto;
      flex: 1;

      h1,
      h5,
      p {
        text-align: center;
      }

      h1 {
        line-height: 1.3em;
      }

      h5 {
        font-size: 1.5em;
      }
    }
  }

  @media screen and (max-width: 600px) {
    div {
      h5 {
        font-size: 1.1em;
      }

      h1 {
        font-size: 5.5em;
        line-height: 1.2em;
      }

      p {
        font-size: 0.9em;
        width: 90vw;
        line-height: 1.5em;
      }
    }
  }

  @media screen and (max-width: 300px) and (max-height: 700px) {
    div {
      p {
        width: 100vw;
      }
    }
  }
`;

export const Explore = styled.div`
  height: 25em;
  width: 25em;
  min-width: 25em;
  border-radius: 50%;
  background-color: transparent;
  margin-bottom: 10vh;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.5s ease-in-out;

  :hover {
    background-color: rgba(128, 128, 128, 0.7);
    cursor: pointer;
  }

  @media (hover: none) {
    background-color: transparent;
  }

  a {
    text-decoration: none;
  }

  div {
    height: 15em;
    width: 15em;
    min-width: 15em;
    border-radius: 50%;
    background-color: var(--white);
    display: flex;
    align-items: center;
    justify-content: center;

    h3 {
      font-size: 1.9em;
      font-weight: 400;
      text-transform: uppercase;
      color: var(--black);
    }
  }

  @media screen and (max-width: 850px) {
    height: 23em;
    width: 23em;
    min-width: 23em;
    margin-bottom: 5vh;

    div {
      height: 14em;
      width: 14em;
      min-width: 14em;
    }
  }

  @media screen and (max-width: 600px), (max-height: 770px) {
    height: 16em;
    width: 16em;
    min-width: 16em;
    margin-bottom: 0;

    div {
      height: 11.5em;
      width: 11.5em;
      min-width: 11.5em;

      h3 {
        font-size: 1.5em;
      }
    }
  }
`;
