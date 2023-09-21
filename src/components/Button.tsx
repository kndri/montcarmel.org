import styled from "styled-components";
import RightArrowIcon from "./RightArrowIcon"; // Import your RightArrowIcon component if needed

interface ButtonProps {
  text: string;
  rightIcon?: boolean;
  link: string;
}

const StyledButton = styled.a`
  align-items: center;
  justify-content: space-between;
  background-color: #e1dbcb;
  border-bottom-color: rgb(40, 44, 50);
  border-bottom-left-radius: 32px;
  border-bottom-right-radius: 32px;
  border-bottom-style: solid;
  border-bottom-width: 0px;
  border-left-color: rgb(40, 44, 50);
  border-left-style: solid;
  border-left-width: 0px;
  border-right-color: rgb(40, 44, 50);
  border-right-style: solid;
  border-right-width: 0px;
  border-top-color: rgb(40, 44, 50);
  border-top-left-radius: 32px;
  border-top-right-radius: 32px;
  border-top-style: solid;
  border-top-width: 0px;
  box-sizing: border-box;
  color: rgb(40, 44, 50);
  cursor: pointer;
  display: flex;
  font-family: "Inter", sans-serif;
  font-feature-settings: "kern";
  font-size: 16px;
  font-weight: 500;
  height: 56px;
  line-height: 24px;
  margin-bottom: 0px;
  margin-inline-end: 0px;
  margin-inline-start: 0px;
  outline-color: rgba(0, 0, 0, 0);
  outline-offset: 2px;
  outline-style: solid;
  outline-width: 2px;
  padding-inline-end: 24px;
  padding-inline-start: 24px;
  text-decoration-color: rgb(40, 44, 50);
  text-decoration-line: none;
  text-decoration-style: solid;
  text-decoration-thickness: auto;
  text-rendering: optimizelegibility;
  transition-delay: 0s;
  transition-duration: 0.3s;
  transition-property: all;
  transition-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  width: 176.859px;
  -webkit-box-align: center;
  -webkit-font-smoothing: antialiased;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
`;

const Button: React.FC<ButtonProps> = ({ text, rightIcon, link }) => {
  return (
    <StyledButton href={link}>
      {text}
      {rightIcon && <RightArrowIcon />}
    </StyledButton>
  );
};

export default Button;
