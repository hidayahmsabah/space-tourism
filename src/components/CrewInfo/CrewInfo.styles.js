import styled from "styled-components";

export const Image = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: flex-end;
  height: 80vh;
  z-index: 1;
  animation: fadein 1s;

  div {
    padding: 0 0 5em 5vw;
    width: 50%;
    align-self: center;

    *:not(p) {
      text-transform: uppercase;
    }

    *:not(h4) {
      color: var(--white);
    }

    h2,
    h4 {
      font-weight: 200;
    }

    h4 {
      color: var(--grey);
      font-size: 290%;
      transition: font-size 0.5s ease;
    }

    h2 {
      font-size: 400%;
      text-align: left;
      line-height: 1.5em;
      transition: font-size 0.5s ease;
    }

    p {
      font-size: 1.3em;
      letter-spacing: 0.05em;
      font-weight: lighter;
      line-height: 1.5em;
    }
  }

  &.crew {
    transition: opacity 1s ease-in;
  }

  &.crew.current {
    transition: opacity 1s;
  }

  img {
    user-select: none;
  }

  @media screen and (max-width: 955px) {
    div {
      h4 {
        font-size: 250%;
      }

      h2 {
        font-size: 330%;
      }

      p {
        font-size: 1.1em;
      }
    }
  }

  @media screen and (max-width: 850px) {
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    height: 90vh;
    padding: 8vh 0 0 0;
    width: 100vw;

    div {
      padding: 0;
      flex-basis: 50%;
      width: 100vw;

      h2,
      h4,
      p {
        text-align: center;
      }

      h4 {
        font-size: 200%;
      }

      h2 {
        font-size: 300%;
      }

      p {
        font-size: 1em;
      }

      p {
        width: 70vw;
        margin: 0 auto;
      }
    }
  }

  @media screen and (max-width: 600px) {
    flex-direction: column-reverse;
    padding: 0;

    > *:first-child {
      border-top: solid 1px rgba(128, 128, 128, 0.5);
    }

    div {
      flex: 1;
      width: 90%;
      padding-top: 5vh;
      align-self: center;

      h4 {
        font-size: 150%;
      }

      h2 {
        font-size: 200%;
      }

      p {
        font-size: 0.9em;
      }
    }

    img {
      height: 40%;
    }
  }

  @media screen and (max-width: 375px) and (max-height: 800px) {
    div {
      h2 {
        font-size: 175%;
      }

      p {
        font-size: 0.8em;
      }
    }
  }
`;
