import React from "react";
import styled from "styled-components";

// Styled components for the LatestSermon component
const SermonSection = styled.section`
position: relative;
overflow: hidden;
border-radius: 20px;
padding: 50px; /* Add padding to the entire section */

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
      background-color: rgb(255, 255, 255);
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

const LatestSermon: React.FC = () => {
  return (
    <SermonSection>
      <div className="sermon-image">
        <img
          style={{ height: "100%", objectFit: "cover" }}
          className="chakra-image css-j098jv"
          src="https://cdn.titanvest.com/images/marketing/careers/values-video-preview.png"
        />
      </div>
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
          Watch Sermon
        </button>
      </div>
    </SermonSection>
  );
};

export default LatestSermon;
