import styled from 'styled-components';
import { ListItem, ListItemButton } from '@mui/material';

const MyListItem = styled(ListItem)`&&& {
  display: flex;
  justify-content: center`;

const MyListItemButton = styled(ListItemButton)`
  &&& {
    border: 1px solid black;
    display: flex;
    align-content: space-around;
    
    &:hover {
      border: 1px solid blue;
      transition: border 0.5s;
      
      
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
