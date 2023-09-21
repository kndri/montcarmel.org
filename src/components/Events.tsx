import React from "react";
import styled, { css } from 'styled-components';

const media = {
  desktop: (...args) => css`
    @media (min-width: 870px) {
      ${css(...args)};
    }
  `,
};

const EventSection = styled.section`
  padding-left: 25px;
  padding-right: 25px;
  ${media.desktop`
   padding-left: 50px;
   padding-right: 50px;
`}
`

// Styled container for events
const EventsSectionHeading = styled.h4`
font-family: "Playfair Display";
font-size: 66px;
margin-bottom: 32px;
padding-bottom: 32px;
color: black;
border-bottom: 1.33px dotted black;
`;

const MonthText = styled.p`
  font-size: 14px;
  font-family: "Inter";
  color: black;
  padding-bottom: 20px;
  ${media.desktop`
  padding-bottom: 0px;
`}
`

const EventsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  ${media.desktop`
    flex-direction: row;
`}
`

const RowContainer = styled.div`
  width: 100%;
  ${media.desktop`
  width: 60%;
`}
`

const EventRow = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  margin-bottom: 30px;
  ${media.desktop`
  width: 60%;
`}
`

const EventLink = styled.a`
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: space-between;
`

const EventName = styled.p`
  font-size: 18px;
  font-family: "Inter";
  color: #282C32;
  margin-bottom: 8px;
`

const EventDetail = styled.p`
  font-size: 14px;
  color: #606663;
`

const Events: React.FC = () => {
  return (
    <EventSection>
      <div className="headerContainer">
        <EventsSectionHeading style={{color: 'black', fontSize: 66}} className="eventsHeading">Events</EventsSectionHeading>
      </div>
      <EventsContainer>
        <MonthText>Septmember</MonthText>
        <RowContainer>

        <EventRow>
          <EventLink href="">
            <div className="eventDetails">
              <EventName>Rise and Shine Breakfast</EventName>
              <EventDetail>Charlotte, NC</EventDetail>
              <EventDetail>8:00am Est ~ 9:00am Est</EventDetail>
            </div>
            <svg stroke="black" fill="none" stroke-width="1.5" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" class="css-y2i9hr" height="24" width="24" xmlns="http://www.w3.org/2000/svg"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
          </EventLink>
        </EventRow>
        
        <EventRow>
          <EventLink href="">
            <div className="eventDetails">
              <EventName>Rise and Shine Breakfast</EventName>
              <EventDetail>Charlotte, NC</EventDetail>
              <EventDetail>8:00am Est ~ 9:00am Est</EventDetail>
            </div>
            <svg stroke="black" fill="none" stroke-width="1.5" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" class="css-y2i9hr" height="24" width="24" xmlns="http://www.w3.org/2000/svg"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
          </EventLink>
        </EventRow>


        <EventRow>
          <EventLink href="">
            <div className="eventDetails">
              <EventName>Rise and Shine Breakfast</EventName>
              <EventDetail>Charlotte, NC</EventDetail>
              <EventDetail>8:00am Est ~ 9:00am Est</EventDetail>
            </div>
            <svg stroke="black" fill="none" stroke-width="1.5" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" class="css-y2i9hr" height="24" width="24" xmlns="http://www.w3.org/2000/svg"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
          </EventLink>
        </EventRow>
        </RowContainer>

      </EventsContainer>
    </EventSection>
  );
};

export default Events;
