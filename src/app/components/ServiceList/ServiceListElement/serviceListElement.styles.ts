import styled from 'styled-components';
import { ListItem, ListItemButton } from '@mui/material';

const MyListItem = styled(ListItem)`&&& {
  display: flex;
  justify-content: center`;

const MyListItemButton = styled(ListItemButton)`
  &&& {
    margin-bottom: 10px;
    background-color: #ffffff;
  }
`;

const MyP = styled.p`
  font-weight: bold;
`;

const MyItemFlex = styled(MyListItem)`
  display: flex;
  flex-direction: column;
`;

export { MyListItem, MyListItemButton, MyP, MyItemFlex };
