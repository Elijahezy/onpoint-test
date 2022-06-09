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

const InnerContainer = styled.div((props) => {
  if (props.isPopUp) {
    return {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      margin: '15vh 0 0 7vw',
      justifyContent: 'flex-start',
      backgroundColor: 'white',
      width: '90%',
      padding: '5vh 0 5vh 18vw',
      border: 'none',
      borderTopRightRadius: '50px',
      borderBottomRightRadius: '50px',
      boxShadow: '4px 4px 26px 0px rgba(34, 60, 80, 0.2)',
      position: 'relative',
      height: '561px',
    };
  }
  return {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    margin: '15vh 0 0 7vw',
    justifyContent: 'flex-start',
    border: 'none',
    width: '90%',
    padding: '5vh 0 5vh 18vw',
    position: 'relative',
    height: '561px',
  };
});

const BackgroundImg = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;

  background-image: url('/img/slide3/bg.png');

  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  z-index: -1;

  ::before {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: ${(props) => props.bg};
    opacity: 0.7;
  }
`;

const Title = styled.h1`
  display: block;

  font-size: 14.1vh;
  font-weight: normal;
  margin: 0;
  text-align: left;
  grid-column: 1 / span 2;
`;

const SubTitle = styled.h2`
  font-size: 4vh;
  font-weight: normal;
  font-family: 'DINPro';
  grid-column: 1 / span 2;
  padding-left: 5px;
  margin: 0;
`;

const Text1 = styled.p`
  display: flex;
  font-size: 3vh;
  font-weight: normal;
  width: 90%;
`;

const Text2 = styled.p`
  display: flex;
  font-size: 2.5vh;
  font-weight: normal;
  background-color: white;
  border-radius: 50px;
  -webkit-box-shadow: 4px 4px 26px 0px rgba(34, 60, 80, 0.2);
  -moz-box-shadow: 4px 4px 26px 0px rgba(34, 60, 80, 0.2);
  box-shadow: 4px 4px 26px 0px rgba(34, 60, 80, 0.2);
  position: relative;
  height: 30%;
  padding: 7vh 2vw 15vh 13%;
  margin: 0;
  font-size: 3vh;
`;

const Text1Container = styled.div`
  background-color: white;
  border-radius: 50px;
  -webkit-box-shadow: 4px 4px 26px 0px rgba(34, 60, 80, 0.2);
  -moz-box-shadow: 4px 4px 26px 0px rgba(34, 60, 80, 0.2);
  box-shadow: 4px 4px 26px 0px rgba(34, 60, 80, 0.2);
  width: 150%;
  transform: translateX(-40%);
  z-index: 0;
  padding: 4vh 2vw 6vh 63%;
  margin: 10vh 0 0 0;
  position: relative;
  height: 70%;
`;

const Text2Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 10vh 0 0 0;
  justify-content: space-between;
  position: relative;
  width: 300px;
  height: 70%;
`;

const Icon1 = styled.img`
  position: absolute;
  top: -11%;
  left: 42%;
  width: 15%;
`;

const Icon2 = styled.img`
  position: absolute;
  top: -15%;
  left: 13%;
  width: 25%;
`;

const Button = styled.button`
  background-image: url('/img/slide3/btn.png');
  border: none;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  background-color: inherit;
  width: 300px;
  height: 92px;
  cursor: pointer;
  padding: 0;
`;

const XButton = styled.div`
  position: absolute;
  top: 10%;
  right: 10%;
  cursor: pointer;
  z-index: 1;
  :before,
  :after {
    content: '';
    position: absolute;
    width: 42px;
    height: 4px;
    background: #272727;
  }

  :before {
    transform: rotate(45deg);
  }

  :after {
    transform: rotate(-45deg);
  }
`;

export {
  Container,
  BackgroundImg,
  SubTitle,
  Title,
  InnerContainer,
  Text1,
  Text2,
  Text1Container,
  Icon1,
  Icon2,
  Text2Container,
  Button,
  XButton,
};
