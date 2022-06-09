import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  padding-left: 6px;
  width: 70%;
  grid-column: 1 / span 2;
  height: 100%;
`;

const Order = styled.span`
  font-size: 3vh;
  display: flex;
  color: #8cc9e8;
  margin: 2vh 0 0 0;
  font-weight: bold;
`;

const Text = styled.p`
  font-size: 2.5vh;
  color: #2e2e2e;
  font-weight: normal;
  margin: 1vh 0 0 0;
  padding: 0;
`;

const SliderContainer = styled.div`
  display: flex;
  align-items: center;
  transform: translateX(-8px);
  margin: 5vh 0 0 0;
  gap: 5px;
`;

const SliderDot = styled.span`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: #fc6da9;
`;

const SliderDotEmpty = styled.span`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: transparent;
  border: 1px solid #272727;
`;

export { Container, Order, Text, SliderContainer, SliderDot, SliderDotEmpty };
