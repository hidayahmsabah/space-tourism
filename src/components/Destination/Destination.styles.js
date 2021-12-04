import styled from "styled-components";
import BgDesktop from "../../assets/destination/background-destination-desktop.jpg";
import BgTablet from "../../assets/destination/background-destination-tablet.jpg";
import BgMobile from "../../assets/destination/background-destination-mobile.jpg";

export const Wrapper = styled.div`
  background: center / cover no-repeat url(${BgDesktop});
  display: flex;
  justify-content: space-around;
  padding-top: 25vh;
  align-items: center;

  @media screen and (max-width: 850px) {
    background: center / cover no-repeat url(${BgTablet});
    flex-direction: column;
    padding-top: 10vh;
  }

  @media screen and (max-width: 600px) {
    background: center / cover no-repeat url(${BgMobile});
  }

  @media screen and (max-width: 375px) and (max-height: 800px) {
    padding-top: 7vh;
  }
`;

export const ContentLeft = styled.div`
  flex-basis: 40%;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  margin: 0 5% 0;

  h5 {
    color: var(--white);
    text-transform: uppercase;
    font-size: 200%;
    font-weight: 200;
    letter-spacing: 0.1em;
    padding: 0 0 2em 10%;
    align-self: flex-start;
  }

  img {
    max-width: 90%;
  }

  @media screen and (max-width: 850px) {
    width: 100%;
    flex-basis: 40vh;
    h5 {
      padding: 1em 2em 2em;
      align-self: flex-start;
      line-height: 0;
      font-size: 175%;
    }

    img {
      height: 75%;
      max-height: 100%;
    }
  }

  @media screen and (max-width: 600px) {
    flex-basis: 35vh;

    h5 {
      padding: 1em 0 1.5em;
      align-self: center;
      font-size: 125%;
    }
  }

  @media screen and (max-width: 375px) and (max-height: 800px) {
    margin-bottom: -3em;

    img {
      height: 60%;
    }
  }
`;

export const ContentRight = styled.div`
  flex: 1 35em;
  color: var(--white);
  display: flex;
  flex-direction: column;
  padding: 3em 5em 0 0;

  *:not(p) {
    text-transform: uppercase;
  }

  ul {
    list-style-type: none;
    display: flex;
    justify-content: space-between;
    margin-right: 5em;

    button {
      background-color: transparent;
      border: none;
      color: inherit;
      font-size: 1.5em;
      padding-bottom: 0.7em;
      border-bottom: solid 0.1em transparent;
      transition: border 0.5s ease;

      :hover {
        cursor: pointer;
        border-bottom: solid 0.1em var(--grey);
      }

      &.active {
        border-bottom: solid 0.1em var(--white);
      }
    }
  }

  h2 {
    font-size: 600%;
    text-align: left;
    line-height: 1.5em;
    font-weight: 200;
  }

  p {
    padding-bottom: 3em;
    font-size: 1.2em;
    letter-spacing: 0.05em;
    font-weight: lighter;
  }

  hr {
    border-color: var(--grey);
    margin: 0 0 2em 0;
  }

  .extra {
    display: flex;
    justify-content: space-between;
  }

  .head {
    font-size: 1.2em;
  }

  .data {
    padding-top: 0.5em;
    font-size: 2em;
    font-weight: 200;
  }

  @media screen and (max-width: 850px) {
    padding: 2em 2em 0 2em;
    justify-content: center;

    ul {
      margin: 0;
      align-self: center;
      width: 20em;
      justify-content: space-around;

      button {
        padding-bottom: 0.5em;
      }
    }

    h2 {
      text-align: center;
      font-size: 400%;
    }

    p {
      text-align: center;
      font-size: 1.1em;
      width: 80vw;
      padding: 0 2em 2em;
    }

    .extra {
      justify-content: space-around;
    }

    .head {
      font-size: 1.1em;
    }

    .data {
      font-size: 1.7em;
    }
  }

  @media screen and (max-width: 600px) {
    flex: 1;
    padding: 1em;

    ul {
      width: 13em;

      button {
        font-size: 1.1em;
        padding-bottom: 0.7em;
      }
    }

    h2 {
      font-size: 300%;
    }

    p {
      font-size: 0.9em;
      width: 90vw;
      padding: 0 1em 2em;
    }

    hr {
      margin-bottom: 0.5em;
    }

    .extra {
      flex-direction: column;
      justify-content: space-around;
      align-items: center;
      flex-basis: 30%;
    }

    .data,
    .head {
      text-align: center;
    }

    .head {
      font-size: 1em;
    }

    .data {
      font-size: 1.5em;
      padding-top: 0;
    }
  }

  @media screen and (max-width: 375px) and (max-height: 800px) {
    padding: 2em 2em 0 2em;

    .head {
      font-size: 0.8em;
    }

    .data {
      font-size: 1.3em;
    }
  }
`;
