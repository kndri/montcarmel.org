import styled from "styled-components";

const Section = styled.section`
  background-color: white;
  padding-bottom: 48px;
  padding-left: 50px;
  padding-right: 50px;
`;

const MissionText = styled.p`
  font-family: "Inter", sans-serif;
  font-weight: 500;
  font-size: 14px;
  line-height: 1.45;
  letter-spacing: -0.02em;
  color: rgb(40, 44, 50);
  padding-top: 12px;
`;

const Spacer = styled.div`
  margin-bottom: 32px;
`;

const Heading = styled.h3`
  font-family: "Vogue";
  color: rgb(40, 44, 50);
  font-size: 68px;
  line-height: 0.95;
  letter-spacing: -0.01em;
  @media (max-width: 768px) {
    font-size: 48px; /* Adjust the font size for responsiveness */
  }
`;

const LearnMoreButton = styled.a`
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
  margin-top: 40px;
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
const MissionCallout = () => {
  return (
    <Section>
      <MissionText>Our mission</MissionText>
      <Spacer />
      <div>
        <Heading>
          We exist to see people saved, empowered and loved by the power of the
          gospel.
        </Heading>
        <LearnMoreButton href="/join-now">
          Learn More
          <div className="css-1thcimh">
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M8 16L6.95 14.925L13.125 8.75H0V7.25H13.125L6.95 1.075L8 0L16 8L8 16Z"></path>
            </svg>
          </div>
        </LearnMoreButton>
      </div>
    </Section>
  );
};

export default MissionCallout;
