import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: row;
  width: 14vw;
  height: 4vh;
  align-items: center;
  gap: 2vw;
`;

const Name = styled.span`
  font-size: 2vh;
  font-weight: normal;
  color: ${(props) => props.theme.colors.text};
`;

const Separator = styled.span`
  height: 100%;
  width: 1px;
  background-color: ${(props) => props.theme.colors.text};
`;

const Logo = styled.span`
  background-image: url('/img/logo.png');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  width: 7vw;
  height: 2vh;
  background-color: inherit;
  cursor: pointer;
  z-index: 1;
  display: block;
  margin: auto 0 0 0;
`;

const BgItem = styled.img`
  position: absolute;
  top: ${({ item }) => item.top};
  left: ${({ item }) => item.left};
  bottom: ${({ item }) => item.bottom};
  right: ${({ item }) => item.right};
  width: ${({ item }) => item.width || '10%'};
  z-index: ${({ item }) => item.zIndex || -1};
  transform: rotate(${({ item }) => item.rotate || '0deg'});
  opacity: ${({ item }) => item.opacity || 1};
`;

export { Container, Name, Separator, Logo, BgItem };
