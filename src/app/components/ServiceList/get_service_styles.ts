import styled from 'styled-components';

const RenderList = styled.div`
  width: 700px;
  height: 700px;
  overflow-y: scroll;
`;

const Table = styled.table`
  background-color: rgba(195, 195, 195, 0.8);
  width: 100%;
  margin-bottom: 2px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Logo = styled.image`
  width: 30%;
`;

export { RenderList, Table, Logo };
