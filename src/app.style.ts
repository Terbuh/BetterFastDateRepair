import styled from 'styled-components';

const Container = styled.div`
  body {
    height: 100%;
  }
`;

const Header = styled.div`
  display: flex;
  justify-content: center;
  height: 80px;
`;

const WebLogo = styled.div`
  height: 100px;
  width: 100px;
  margin-left: 15px;
  margin-top: 10px;
  background-color: blue;
`;

const Content = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
`;

export { Container, Header, WebLogo, Content };
