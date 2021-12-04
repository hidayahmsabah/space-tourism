import styled from "styled-components";
import logo from "../../assets/shared/logo.svg";

export const Wrapper = styled.nav`
  position: sticky;
  top: 0;
  background: transparent;
  display: flex;
  min-height: 6rem;
  z-index: 1000;
  padding: 4rem 0;
  justify-content: space-between;

  @media screen and (max-width: 850px) {
    padding: 0;
    min-height: 4rem;
  }

  .line {
    position: fixed;
    background: rgba(128, 128, 128, 0.5);
    width: 40vw;
    height: 1px;
    z-index: 1000;
    top: 6.5em;
    left: 9em;

    @media screen and (max-width: 850px) {
      display: none;
    }
  }
`;

export const Logo = styled.div`
  width: 3em;
  height: 3em;
  margin: auto 0 auto 1em;
  background: center / contain no-repeat url(${logo});
  flex: 0.1;
`;

export const Nav = styled.ul`
  list-style-type: none;
  display: flex;
  justify-content: space-evenly;
  padding-right: 4em;
  align-items: center;
  flex: 0.5;
  background-color: rgba(128, 128, 128, 0.1);
  backdrop-filter: blur(10px);
  transition: all 0.5s ease;

  li {
    display: inline-block;
    /* line-height: 4em; */
    font-size: 1.3em;
    text-transform: uppercase;
    color: var(--white);
    transition: all 0.5s ease-out;
    box-sizing: border-box;
    border-bottom: solid 0.1em transparent;
    /* padding: 1.3em 0; */

    a {
      display: inline-block;
      text-decoration: none;
      color: inherit;
      height: 100%;
      padding: 1.3em 0;
    }

    b {
      padding-right: 0.3em;
    }

    :hover {
      border-bottom: var(--grey) solid 0.1em;
    }

    &.active {
      border-bottom: var(--white) solid 0.1em;
    }
  }

  @media screen and (max-width: 950px) {
    padding-right: 2em;

    li {
      font-size: 1.2em;

      b {
        padding-right: 0.1em;
      }
    }
  }

  @media screen and (max-width: 850px) {
    padding: 0 2em;
    justify-content: space-around;

    li {
      font-size: 1.1em;

      b {
        display: none;
      }
    }
  }

  @media screen and (max-width: 600px) {
    display: none;
  }
`;

export const MobileNav = styled.div`
  display: none;
  transition: all 0.5s ease;

  @media screen and (max-width: 600px) {
    display: block;
    width: 10%;
    height: 100%;
    margin: auto 1em;
    position: relative;

    :hover {
      cursor: pointer;
    }
  }
`;
