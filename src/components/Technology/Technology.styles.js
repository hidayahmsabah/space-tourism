import styled from "styled-components";
import BgDesktop from "../../assets/technology/background-technology-desktop.jpg";
import BgTablet from "../../assets/technology/background-technology-tablet.jpg";
import BgMobile from "../../assets/technology/background-technology-mobile.jpg";

export const Wrapper = styled.div`
  background: center / cover no-repeat url(${BgDesktop});
  padding-top: 25vh;
  display: flex;
  flex-direction: column;

  @media screen and (max-width: 850px) {
    background: center / cover no-repeat url(${BgTablet});
    padding-top: 10vh;
  }

  @media screen and (max-width: 500px) {
    background: center / cover no-repeat url(${BgMobile});
  }
`;

export const Head = styled.div`
  h5 {
    color: var(--white);
    text-transform: uppercase;
    font-size: 200%;
    font-weight: 200;
    letter-spacing: 0.1em;
    margin-left: 9%;
  }

  @media screen and (max-width: 850px) {
    h5 {
      padding: 0 0 1em;
      margin-left: 7%;
    }
  }

  @media screen and (max-width: 600px) {
    h5 {
      text-align: center;
      font-size: 150%;
    }
  }
`;

export const Content = styled.div`
  display: flex;
  justify-content: space-around;
  padding-bottom: 5%;
  flex: 1;

  .terms {
    padding: 0 3em;
    flex: 1 30%;
    align-self: center;
    animation: fadein 1s;

    *:not(p) {
      text-transform: uppercase;
    }

    *:not(h4) {
      color: var(--white);
    }

    h3,
    h6 {
      font-weight: 200;
    }

    h6 {
      color: var(--white);
      font-size: 150%;
      transition: font-size 0.5s ease;
    }

    h3 {
      font-size: 350%;
      text-align: left;
      line-height: 1.5em;
      transition: font-size 0.5s ease;
    }

    p {
      font-size: 1.2em;
      letter-spacing: 0.06em;
      font-weight: lighter;
      line-height: 1.7em;
    }
  }

  img {
    flex: 1;
    min-width: 30%;
    animation: fadein 1s;
  }

  @media screen and (max-width: 950px) {
    .terms {
      padding: 0 1em;

      h6 {
        font-size: 125%;
      }

      h3 {
        font-size: 325%;
      }
    }
  }

  @media screen and (max-width: 850px) {
    flex-direction: column;
    padding: 0;

    .terms {
      order: 3;
      flex: 1 40%;

      h3,
      h6,
      p {
        text-align: center;
      }

      p {
        font-size: 1.1em;
        width: 70%;
        margin: 0 auto;
      }
    }

    img {
      order: 1;
      flex: 1 40%;
    }
  }

  @media screen and (max-width: 600px) {
    .terms {
      h6 {
        font-size: 115%;
      }
      h3 {
        font-size: 225%;
      }

      p {
        width: 90%;
        font-size: 1em;
      }
    }

    img {
      flex: 1 30%;
    }
  }

  @media screen and (max-width: 375px) and (max-height: 800px) {
    .terms {
      h6 {
        font-size: 100%;
      }
      h3 {
        font-size: 175%;
      }
      p {
        width: 90%;
        font-size: 0.8em;
      }
    }
  }
`;

export const Nav = styled.div`
  display: flex;
  flex-direction: column;
  flex: 0.5 6em;
  margin: 0 auto;
  align-self: center;

  @media screen and (max-width: 850px) {
    order: 2;
    flex-direction: row;
    flex: 1 15%;
    margin: 0 auto 1.5em;
  }

  @media screen and (max-width: 600px) {
    flex: 1 10%;
    margin: 0 auto 1.5em;
  }

  @media screen and (max-width: 375px) and (max-height: 800px) {
    flex: 1 5%;
  }
`;

export const Button = styled.button`
  font-family: var(--head-font);
  border-radius: 50%;
  width: 3em;
  height: 3em;
  background-color: ${({ extra }) => (extra ? "var(--white)" : "var(--black)")};
  color: ${({ extra }) => (extra ? "var(--black)" : "var(--white)")};
  border: solid thin var(--grey);
  font-size: 2em;
  cursor: pointer;
  transition: border 0.3s ease-in;
  margin: 0 auto;

  :not(:last-child) {
    margin-bottom: 1.25em;
  }

  :hover {
    border: solid thin var(--white);
  }

  @media screen and (max-width: 850px) {
    width: 2em;
    height: 2em;
    margin-top: auto;

    :not(:last-child) {
      margin-right: 1em;
      margin-bottom: 0;
    }
  }

  @media screen and (max-width: 600px) {
    font-size: 1.5em;
  }

  @media screen and (max-width: 375px) and (max-height: 800px) {
    font-size: 1.25em;
  }
`;
