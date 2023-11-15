import styled from 'styled-components';

const Header = styled.div`
  position: relative;
  height: 275px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;

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
    opacity: 0.75;
  }
`;

const Title = styled.h2`
  color: white;
  font-size: 120px;
  font-weight: 600;
  font-style: italic;
  text-align: center;
  text-transform: uppercase;
  position: relative;
  @media (max-width: 768px) {
    font-size: 50px;
  }
`;

const PageHeader = () => {
    return (
      <div style={{background: 'black'}}>
      <Header>
        <Title>About Us</Title>
      </Header>
      </div>
    )
}

export default PageHeader;