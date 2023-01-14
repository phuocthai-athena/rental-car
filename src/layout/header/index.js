import React from "react";
import { Link, NavLink } from "react-router-dom";

import * as S from "./style";

const items = [
  {
    title: "home",
    url: "/",
  },
  {
    title: "cars",
    url: "/cars",
  },
  {
    title: "services",
    url: "/services",
  },
  {
    title: "about us",
    url: "/about-us",
  },
];

const Header = () => {
  return (
    <S.HeaderContainer>
      <S.HeaderTitle>
        <Link to="/">morent</Link>
      </S.HeaderTitle>
      <S.HeaderItems>
        {items &&
          items.map((item, index) => (
            <S.HeaderItem key={index}>
              <NavLink
                className={({ isActive }) =>
                  isActive ? "text-primaryDefault underline" : undefined
                }
                to={item.url}
              >
                {item.title}
              </NavLink>
            </S.HeaderItem>
          ))}
      </S.HeaderItems>
    </S.HeaderContainer>
  );
};

export default Header;
