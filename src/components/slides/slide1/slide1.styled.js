import styled from 'styled-components';

const Container = styled.div`
  min-width: 100%;
  max-width: 100%;
  width: 1024px;
  height: 768px;
  overflow: hidden;

  padding: 3vh 6vw;
  display: flex;
  flex-direction: column;
  position: relative;
`;

const BackgroundImg = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;

  background-image: url('/img/bg.png');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  z-index: -1;
`;

const Title = styled.h1`
  font-size: 14.1vh;
  font-weight: 300;
  margin: 0;
  overflow: hidden;
`;

const SubTitle = styled.h2`
  font-size: 4vh;
  margin: 15vh 0 0 0;
  font-family: 'DINPro';
`;

const TitleContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 5vw;
`;

const Button = styled.button`
  background-image: url('/img/btn.png');
  border: none;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  background-color: inherit;
  width: 300px;
  height: 84px;
  cursor: pointer;
`;

export { Container, BackgroundImg, Title, SubTitle, Button, TitleContainer };
