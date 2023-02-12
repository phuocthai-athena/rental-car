import React from "react";
import { Link, NavLink } from "react-router-dom";
import AvatarDefault from "assets/images/avatar_default.png";

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
    title: "rent",
    url: "/rent",
  },
  {
    title: "like",
    url: "/like",
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
        <S.HeaderItem>
          <S.HeaderImage src={AvatarDefault} alt="Avatar" />
        </S.HeaderItem>
      </S.HeaderItems>
    </S.HeaderContainer>
  );
};

export default Header;
