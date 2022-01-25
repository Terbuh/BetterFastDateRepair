import styled from 'styled-components';

const ListHeight = styled.div`
  width: 50%;
  height: 800px;
  overflow-y: scroll;
  ::-webkit-scrollbar {
    display: none;
  }
  margin: 0;
  background-color: rgba(197, 196, 195, 0.37);
`;

const Logo = styled.div`
  width: 30%;
`;

export { ListHeight, Logo };
