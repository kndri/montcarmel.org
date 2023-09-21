import styled from "styled-components";

const IconWrapper = styled.div`
  align-items: center;
  background-color: rgb(40, 44, 50);
  border-bottom-color: rgb(255, 255, 255);
  border-bottom-left-radius: 50%;
  border-bottom-right-radius: 50%;
  border-bottom-style: solid;
  border-bottom-width: 0px;
  border-left-color: rgb(255, 255, 255);
  border-left-style: solid;
  border-left-width: 0px;
  border-right-color: rgb(255, 255, 255);
  border-right-style: solid;
  border-right-width: 0px;
  border-top-color: rgb(255, 255, 255);
  border-top-left-radius: 50%;
  border-top-right-radius: 50%;
  border-top-style: solid;
  border-top-width: 0px;
  box-sizing: border-box;
  color: rgb(255, 255, 255);
  cursor: pointer;
  display: flex;
  flex-shrink: 0;
  font-family: Inter, -apple-system, "system-ui", "Segoe UI", Helvetica, Arial,
    sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
  font-feature-settings: "kern";
  font-size: 16px;
  font-weight: 500;
  height: 40px;
  justify-content: center;
  line-height: 24px;
  margin-left: 16px;
  margin-right: -16px;
  text-align: center;
  text-rendering: optimizelegibility;
  width: 40px;
  -webkit-box-align: center;
  -webkit-box-pack: center;
  -webkit-font-smoothing: antialiased;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
`;

const RightArrowIcon = () => {
  return (
    <IconWrapper>
      <svg
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M8 16L6.95 14.925L13.125 8.75H0V7.25H13.125L6.95 1.075L8 0L16 8L8 16Z"></path>
      </svg>
    </IconWrapper>
  );
};

export default RightArrowIcon;
