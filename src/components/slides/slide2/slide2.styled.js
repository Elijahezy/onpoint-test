import styled from 'styled-components';

const Container = styled.div`
  min-width: 100%;
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

  background-image: url('/img/slide2/bg.png');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  z-index: -1;
`;

const SubTitle = styled.h2`
  font-size: 4vh;
  margin: 15vh 0 0 0;
  font-weight: normal;
  font-family: 'DINPro';
`;

const TextContainer = styled.div`
  width: 80vw;
  overflow-y: overlay;
  height: 50vh;
  direction: rtl;
  margin: 5vh 0 0 0vw;
  padding: 0 0 0 5vw;
  ::-webkit-scrollbar {
    width: 40px;
  }

  ::-webkit-scrollbar-thumb {
    background-image: url('/img/slide2/btn.png');
    background-repeat: no-repeat;
    background-size: auto;
  }
`;

const TextContainerInner = styled.div`
  display: flex;
  background-color: white;
  border-radius: 40px;
  font-size: 2.5vh;
`;

const Text = styled.p`
  position: relative;

  text-align: left;
  margin: 0px;
  padding: 20px 30px;
  ::before {
    content: '';
    position: absolute;
    top: 0;
    left: -35px;
    width: 3px;
    height: 100%;
    background-color: black;
    border-radius: 50%;
    border: 1px solid black;
  }
`;

export {
  Container,
  BackgroundImg,
  SubTitle,
  TextContainer,
  Text,
  TextContainerInner,
};
