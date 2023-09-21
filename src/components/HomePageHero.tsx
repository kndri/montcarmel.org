import React from "react";
import styled, { css }  from "styled-components";

import Button from "./Button";

const media = {
  desktop: (...args) => css`
    @media (min-width: 870px) {
      ${css(...args)};
    }
  `,
};

// Create styled-components for the section, h2, p, and buttons
const HeroSection = styled.section`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  padding: 2rem;
  height: 75vh;
  margin-bottom: 30px;

  & .video-container {
    position: absolute;
    left: 0;
    top: 0;
    z-index: 0;
    height: 100%;
    width: 100%;
    background-size: cover;
    background-position: center;
    padding: 0;
    ${media.desktop`
      padding: 0 2rem;
    `}

    video {
      width: 100%;
      height: 100%;
      object-fit: cover;
      opacity: 1;
      border-radius: 20px;
    }
  }

  & .content-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    z-index: 1;

    & h2 {
      font-size: 4rem;
      font-weight: 600;
      font-style: italic;
      font-family: "Vogue";
    }

    & p {
      font-size: 18px;
      font-family: "Inter", sans-serif;
    }

    & .button-container {
      margin-top: 1rem;
      display: flex;
      flex-direction: row;
      gap: 25px;
      align-items: center;

      & button {
        padding: 0.75rem 1.5rem;
        font-size: 1rem;
        font-family: "Inter", sans-serif;
        font-weight: 600;
        text-transform: uppercase;
        cursor: pointer;
        transition: all 0.3s ease-in-out;
        border-radius: 0;
      }

      & button:first-child {
        background-color: #c42d2d;
        color: white;

        &:hover {
          background-color: #ff0000;
        }
      }

      & button:last-child {
        background-color: #e1dbcb;
        color: black;

        &:hover {
          background-color: #d2c09e;
        }
      }
    }
  }
`;

const StyledTextLink = styled.a`
  font-family: "Inter", sans-serif;
  font-size: 16px;
  color: white; // You can set the desired link color here
  text-decoration: underline; // Add underline for links
  cursor: pointer;
`;

const HomePageHero: React.FC = () => {
  return (
    <HeroSection>
      <div className="video-container">
        <video autoPlay muted loop playsInline>
          <source
            src="https://www.montcarmel.org/wp-content/uploads/2023/08/31e3be67-1c89-4e52-91af-900e06895e62.mp4"
            type="video/mp4"
          ></source>
        </video>
      </div>
      <div className="content-container">
        <h2>Welcome home.</h2>
        <p>
          Join us in person on Sundays at 9am for our English service and 11am
          for our French service.
        </p>
        <div className="button-container">
          <Button link="#" text="Plan a visit" rightIcon />
          <StyledTextLink href="https://example.com">
            Watch Online
          </StyledTextLink>
        </div>
      </div>
    </HeroSection>
  );
};

export default HomePageHero;
