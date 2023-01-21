import React from "react";
import { Link } from "react-router-dom";

import * as S from "./style";

const ourLinks = [
  {
    title: "Home",
    url: "#",
  },
  {
    title: "About Us",
    url: "#",
  },
  {
    title: "Services",
    url: "#",
  },
  {
    title: "Blog",
    url: "#",
  },
];

const otherLinks = [
  {
    title: "FAQ",
    url: "#",
  },
  {
    title: "Support",
    url: "#",
  },
  {
    title: "Privacy Policy",
    url: "#",
  },
  {
    title: "Terms & Conditions",
    url: "#",
  },
];

const socialLinks = [
  {
    title: "Discord",
    icon: "",
    url: "#",
  },
  {
    title: "Instagram",
    icon: "",
    url: "#",
  },
  {
    title: "Twitter",
    icon: "",
    url: "#",
  },
  {
    title: "Facebook",
    icon: "",
    url: "#",
  },
];

const Footer = () => {
  return (
    <S.FooterContainer>
      <S.InnerContainer>
        <S.AboutContainer>
          <S.AboutText>MORENT</S.AboutText>
          <S.AboutDesc>
            Our vision is to provide convenience and help increase your sales
            business.
          </S.AboutDesc>
        </S.AboutContainer>
        <S.SectionContainer>
          <S.SectionItem>
            <S.HeaderTitle>About</S.HeaderTitle>
            <S.LinksList>
              {ourLinks.map((link) => (
                <S.ListItem key={link.title}>
                  <Link to={link.url}>{link.title}</Link>
                </S.ListItem>
              ))}
            </S.LinksList>
          </S.SectionItem>
          <S.SectionItem>
            <S.HeaderTitle>Community</S.HeaderTitle>
            <S.LinksList>
              {otherLinks.map((link) => (
                <S.ListItem key={link.title}>
                  <Link to={link.url}>{link.title}</Link>
                </S.ListItem>
              ))}
            </S.LinksList>
          </S.SectionItem>
          <S.SectionItem>
            <S.HeaderTitle>Socials</S.HeaderTitle>
            <S.LinksList>
              {socialLinks.map((link) => (
                <S.ListItem key={link.title}>
                  <Link to={link.url}>{link.title}</Link>
                </S.ListItem>
              ))}
            </S.LinksList>
          </S.SectionItem>
        </S.SectionContainer>
      </S.InnerContainer>
      <S.Seperator />
      <S.CopyRight>©2022 MORENT. All rights reserved</S.CopyRight>
    </S.FooterContainer>
  );
};

export default Footer;
