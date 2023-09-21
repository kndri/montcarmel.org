import React from "react";
import styled, { css } from "styled-components";

import mc_logo from '../assets/images/mc_logo.png';


const media = {
  desktop: (...args) => css`
    @media (min-width: 870px) {
      ${css(...args)};
    }
  `,
};

const FooterWrapper = styled.footer`
  font-family: nunito-sans, sans-serif;
  text-align: center;
  ${media.desktop`
    text-align: left;
  `}
`;

const TopBar = styled.div`
  margin: auto;
  max-width: 1280px;
  padding: 40px 0;
  ${media.desktop`
    padding: 45px 80px;
    display: flex;
    flex-flow: row;
    justify-content: space-between;
  `}
`;

const StayConnected = styled.div`
  font-size: 18px;
  font-weight: 900;
  line-height: 1.11;
  color: #2b2738;
  margin: 0 -15px;
  display: flex;
  flex-flow: row;
  flex-wrap: wrap;
  ${media.desktop`
    flex-wrap: nowrap;
    align-items: center;
    white-space: nowrap;
  `}
`;

const StayConnectedTitle = styled.div`
  margin-bottom: 4px;
  width: 100%;
  ${media.desktop`
    width: unset;
    margin: 0 15px;
  `}
`;

const DesktopSocialList = styled.div`
  display: none;
  ${media.desktop`
    display: flex;
    align-items: center;
    gap: 25px;
  `};
`;

const MobileSocialList = styled.div`
padding-bottom: 40px;
width: 100%;
gap: 10px;
display: flex;
justify-content: center;
  ${media.desktop`
    display: none;
  `};
`;

const HR = styled.div`
  display: none;
  ${media.desktop`
    height: 0;
    padding: 0;
    margin: 0;
    display: block;
    border-bottom: 1px #cacada solid;
  `};
`;

const BottomBar = styled.div`
  max-width: 1280px;
  margin: auto;
  display: flex;
  flex-flow: row;
  flex-wrap: wrap;
  justify-content: center;
  ${media.desktop`
    flex-wrap: nowrap;
    padding: 40px 80px 60px;
    justify-content: space-between;
  `};
`;

const Menu = styled.div`
  margin-bottom: 30px;
  min-width: 50%;
  ${media.desktop`
    min-width: unset;
    margin-bottom: 0;
    margin-right: 40px;
  `}
`;

const MenuHead = styled.div`
  margin-bottom: 10px;
  font-size: 18px;
  font-weight: 900;
  line-height: 1.11;
  color: #2b2738;
`;

const MenuLink = styled.a`
  display: block;
  text-decoration: none;
  font-size: 16px;
  font-weight: 600;
  line-height: 2;
  color: black;
  ${media.desktop`
    white-space: nowrap;
  `}
`;

const Policy = styled.div`
  width: 100%;
  max-width: 764px;
  font-size: 12px;
  line-height: 1.33;
  color: #2b2738;
  margin: 0 20px;
`;

const PolicyRow = styled.p`
  margin: 0;
  padding: 0;
  padding-bottom: 20px;
`;

const menu = [
  {
    name: "Connect",
    links: [
      { title: "Give", url: "www.openfit.com" },
      { title: "Watch online", url: "www.openfit.com" },
      { title: "Events", url: "www.openfit.com" },
      { title: "Plan a visit", url: "www.openfit.com" },
    ],
  },
];

const SocialList = () => (
  <>
    <i className="fi fi-brands-instagram text-black text-3xl"></i>
    <i className="fi fi-brands-facebook text-black text-3xl"></i>
    <i className="fi fi-brands-youtube text-black text-3xl"></i>
  </>
);

const Footer = () => {
  return (
    <FooterWrapper>
      <TopBar>
        <StayConnected>
          <StayConnectedTitle>Stay Connected</StayConnectedTitle>
        </StayConnected>
        <DesktopSocialList>
          <SocialList />
        </DesktopSocialList>
      </TopBar>
      <HR />
      <BottomBar>
        {menu.map(({ name, links }) => (
          <Menu>
            <MenuHead>{name}</MenuHead>
            {links.map(({ title, url }) => (
              <MenuLink href={url}>{title}</MenuLink>
            ))}
          </Menu>
        ))}
        <MobileSocialList>
          <SocialList />
        </MobileSocialList>
        <Policy>
          <PolicyRow>
            © 2023 Mont Carmel Church of God. All rights reserved.
          </PolicyRow>
          <PolicyRow>
            We exist to see people saved, empowered and loved by the power of
            the Gospel.
          </PolicyRow>
          <PolicyRow>
            Mont Carmel is a 501c3 nonprofit, registered in the US, registration
            number 82-3762145.
          </PolicyRow>
        </Policy>
      </BottomBar>
    </FooterWrapper>
  );
};

export default Footer;
