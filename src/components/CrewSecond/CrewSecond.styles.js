import styled from "styled-components";
import BgDesktop from "../../assets/crew/background-crew-desktop.jpg";
import BgTablet from "../../assets/crew/background-crew-tablet.jpg";
import BgMobile from "../../assets/crew/background-crew-mobile.jpg";

export const Wrapper = styled.div`
  background: center / cover no-repeat url(${BgDesktop});
  padding-top: 25vh;
  position: relative;

  @media screen and (max-width: 850px) {
    background: center / cover no-repeat url(${BgTablet});
    padding-top: 10vh;
  }

  @media screen and (max-width: 600px) {
    background: center / cover no-repeat url(${BgMobile});
  }
`;

export const Content = styled.div`
  width: 40%;
  height: 70vh;
  position: absolute;
  top: 13.75em;
  left: 5%;

  h5 {
    color: var(--white);
    text-transform: uppercase;
    font-size: 200%;
    font-weight: 200;
    letter-spacing: 0.1em;
    padding: 0 0 2em 10%;
  }

  @media screen and (max-width: 850px) {
    top: 6em;
    left: 7%;
    width: 100%;
    height: 38vh;

    h5 {
      padding: 0;
    }
  }

  @media screen and (max-width: 600px) {
    position: static;
    height: 5vh;
    margin-bottom: 1em;

    h5 {
      font-size: 140%;
      text-align: center;
    }
  }
`;

export const Slider = styled.div`
  height: 75vh;

  @media screen and (max-width: 850px) {
    height: 90vh;
  }
`;

export const Button = styled.button`
  width: 1em;
  height: 1em;
  border-radius: 50%;
  background-color: ${({ extra }) =>
    extra ? "var(--white)" : "rgba(128, 128, 128, 0.3)"};
  position: absolute;
  bottom: 2em;
  left: calc(10% * ${({ index }) => parseInt(index) + 1});
  border: none;
  padding: 0.7em;
  cursor: pointer;
  z-index: 2;

  :hover {
    background-color: var(--grey);
  }

  @media screen and (max-width: 850px) {
    left: calc(33% + ${({ index }) => parseInt(index) * 5}%);
    padding: 0.5em;
  }

  @media screen and (max-width: 600px) {
    left: calc(40% + ${({ index }) => parseInt(index) * 5}%);
    top: 55%;
    padding: 0em;
    width: 0.7em;
    height: 0.7em;
  }
`;
