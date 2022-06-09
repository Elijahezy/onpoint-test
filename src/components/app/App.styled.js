import styled from 'styled-components';

const Container = styled.div`
  height: 768px;
  width: 1024px;
`;

const Window = styled.div`
  height: 100%;
  width: 100%;
  overflow: hidden;
`;

const Slider = styled.div`
  height: 100%;
  display: flex;

  transition: transform 0.5s ease-in-out;
`;

export { Container, Slider, Window };
