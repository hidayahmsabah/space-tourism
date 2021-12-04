import React, { useState } from "react";
import SideNav from "../SideNav";
import { Wrapper, Logo, Nav, MobileNav } from "./Navbar.styles";
import burger from "../../assets/shared/icon-hamburger.svg";
import close from "../../assets/shared/icon-close.svg";
import Data from "../../assets/data.json";

const Navbar = ({ len }) => {
  const [nav, setNav] = useState(false);

  function openNavbar() {
    nav ? setNav(false) : setNav(true);
  }

  return (
    <Wrapper>
      <Logo></Logo>
      <div className="line"></div>
      <Nav>
        {Data.navigation.map((el, index) => {
          return (
            <li key={index} className={`${len === index && "active"}`}>
              <a href={el.href}>
                <b>{el.numbering}</b>
                {el.name}
              </a>
            </li>
          );
        })}
      </Nav>
      <MobileNav onClick={openNavbar}>
        <img
          src={`${nav ? close : burger}`}
          alt="Hamburger Icon for Navigation"
        />
        <SideNav nav={nav} data={Data.navigation} len={len} />
      </MobileNav>
    </Wrapper>
  );
};

export default Navbar;
