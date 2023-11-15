import styled, { css } from 'styled-components';

import PageHeader from "../components/PageHeader";
import Button from '../components/Button';

const media = {
  desktop: (...args) => css`
    @media (min-width: 870px) {
      ${css(...args)};
    }
  `,
};

const ImageContainer = styled.div`
position: relative;
height: 275px;
display: flex;
justify-content: start;
align-items: end;
width: 100%;
background-color: black;
padding-bottom: 20px;
padding-left: 20px;

&::before {
  content: "";
  background-image: url('https://i0.wp.com/www.montcarmel.org/wp-content/uploads/2023/06/PAR09974-scaled.jpg?resize=720%2C480&ssl=1');
  background-size: cover;
  background-position: center;
  position: absolute;
  top: 0px;
  right: 0px;
  bottom: 0px;
  left: 0px;
  opacity: 0.50;
}
`;

const Title = styled.h3`
font-family: 'Inter';
font-size: 32px;
text-transform: capitalize;
color: white;
position: relative;
font-weight: bold;
padding-bottom: 10px;
`;

const AboutTextContainer = styled.div`
  max-width: 750px;
  margin: 0 auto;
  padding: 25px;
  ${media.desktop`
  padding-top: 50px;
  padding-bottom: 50px;
`}
`;

const Container = styled.div`
display: flex;
flex-direction: column;
gap: 30px;
padding: 0 25px;
${media.desktop`
flex-direction: row;
padding: 0 150px;
`}
`;

const Home = () => {
  return (
    <>
    <PageHeader />
      <AboutTextContainer>
        <p style={{ color: 'black'}}>Mont Carmel International Christian Center is a culturally diverse and bilingual church (English & French) that welcomes people from all walks of life. Our vision is to be a center of prayer, pursuing excellence in ministry and unifying people of all backgrounds. We are committed to developing men and women for maximum impact in every sphere of life, including their spiritual, personal and professional lives. Our mission is to see people saved, empowered and loved, and we are dedicated to providing a welcoming and nurturing environment for all who enter our doors.</p>
      </AboutTextContainer>


        <Container>
          <ImageContainer>
            <div style={{position: 'relative'}}>
            <Title>Our Pastors</Title>
            <Button link="#" text="Learn more" rightIcon />
            </div>
          </ImageContainer>
          <ImageContainer>
          <div style={{position: 'relative'}}>
            <Title>Our Pastors</Title>
            <Button link="#" text="Learn more" rightIcon />
            </div>            
          </ImageContainer>
          <ImageContainer>
          <div style={{position: 'relative'}}>
            <Title>Our Pastors</Title>
            <Button link="#" text="Learn more" rightIcon />
            </div>          </ImageContainer>
        </Container>
      
    </>
  );
}

export default Home;
