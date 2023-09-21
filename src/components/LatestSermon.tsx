import React from "react";
import styled, { css } from "styled-components";

interface LatestSermonProps {
  title: string;
  speaker: string;
  thumbnailUrl: string;
}

const media = {
  desktop: (...args) => css`
    @media (min-width: 870px) {
      ${css(...args)};
    }
  `,
};

// Styled components for the LatestSermon component
const SermonSection = styled.section`
position: relative;
overflow: hidden;
border-radius: 20px;
padding: 25px;
${media.desktop`
  padding: 50px;
`}

& .sermon-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  padding-bottom: 20px;

  & img {
    border-radius: 20px;

  }

}

& .button-container {
  padding: 0; /* Remove padding to align to the bottom-left */
  background-color: transparent; /* Make the background transparent */
}


    & button {
      align-items: center;
      appearance: auto;
      background-color: #e1dbcb;
      background-image: none;
      background-origin: padding-box;
      background-position-x: 0%;
      background-position-y: 0%;
      background-repeat-x: repeat;
      background-repeat-y: repeat;
      background-size: auto;
      border: 1px solid rgba(40, 44, 50, 0.15);
      border-radius: 32px;
      border-bottom-style: solid;
      border-left-style: solid;
      border-right-style: solid;
      border-top-style: solid;
      border-width: 1px;
      box-sizing: border-box;
      color: rgb(40, 44, 50);
      cursor: pointer;
      display: flex;
      font-family: Inter, -apple-system, "system-ui", "Segoe UI", Helvetica,
        Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji",
        "Segoe UI Symbol";
      font-feature-settings: normal;
      font-kerning: auto;
      font-optical-sizing: auto;
      font-size: 15px;
      font-stretch: 100%;
      font-style: normal;
      font-variant-alternates: normal;
      font-variant-caps: normal;
      font-variant-east-asian: normal;
      font-variant-ligatures: normal;
      font-variant-numeric: normal;
      font-variation-settings: normal;
      font-weight: 500;
      height: 48px;
      letter-spacing: normal;
      line-height: 22.5px;
      margin: 0;
      overflow-x: visible;
      overflow-y: visible;
      padding: 0 24px;
      text-align: center;
      text-indent: 0;
      text-rendering: auto;
      text-shadow: none;
      text-transform: none;
      transition: all 0.3s cubic-bezier(0.215, 0.61, 0.355, 1);
      width: auto;
      word-spacing: 0;
      writing-mode: horizontal-tb;
    }
  }
`;

const SermonTitle = styled.h3`
  color: black;
  font-size: 26px;
  font-weight: 600;
  padding-bottom: 10px;
`;

const SermonSubHeading = styled.p`
  font-family: "Inter", sans-serif;
  font-weight: 500;
  font-size: 14px;
  line-height: 1.45;
  letter-spacing: -0.02em;
  color: rgb(40, 44, 50);
  padding-top: 12px;
  padding-bottom: 10px;
`;

const LatestSermon: React.FC<LatestSermonProps> = ({
  title,
  speaker,
  thumbnailUrl,
}) => {
  return (
    <SermonSection>
      <div className="sermon-image">
        <img
          style={{ height: "100%", objectFit: "cover" }}
          className="chakra-image css-j098jv"
          src={thumbnailUrl} // Use the provided thumbnail URL
          alt="Sermon Thumbnail" // Add an alt text for accessibility
        />
      </div>
      <SermonSubHeading>Latest Sermon</SermonSubHeading>
      <SermonTitle>
        {title} by {speaker}
      </SermonTitle>
      <div className="button-container">
        <button>
          <div>
            <svg viewBox="0 0 24 24" focusable="false" className="chakra-icon">
              <path
                d="M12 1C5.9 1 1 5.9 1 12s4.9 11 11 11 11-4.9 11-11S18.1 1 12 1zM9.5 16V8l7 4-7 4z"
                fill="currentColor"
              ></path>
            </svg>
          </div>
          Watch now
        </button>
      </div>
    </SermonSection>
  );
};

export default LatestSermon;
