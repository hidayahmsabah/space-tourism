import React from "react";
import { Wrapper, Content } from "./SideNav.styles";

const SideNav = ({ nav, data, len }) => {
  return (
    <Wrapper nav={nav}>
      <Content>
        {data.map((el, index) => {
          return (
            <li key={index} className={`${len === index && "active"}`}>
              <a href={el.href}>
                <b>{el.numbering}</b>
                {el.name}
              </a>
            </li>
          );
        })}
      </Content>
    </Wrapper>
  );
};

export default SideNav;
