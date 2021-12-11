import styled from 'styled-components';

const Button = styled.button`
  align-items: center;
  appearance: none;
  background-color: #3eb2fd;
  background-image: linear-gradient(1deg, #4f58fd, #149bf3 99%);
  background-size: calc(100% + 20px) calc(100% + 20px);
  border-radius: 100px;
  border-width: 0;
  box-shadow: none;
  box-sizing: border-box;
  color: #ffffff;
  cursor: pointer;
  display: inline-flex;
  font-family: CircularStd, sans-serif;
  font-size: 1rem;
  height: auto;
  justify-content: center;
  line-height: 1.5;
  padding: 6px 20px;
  position: relative;
  text-align: center;
  text-decoration: none;
  transition: background-color 0.2s, background-position 0.2s;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  vertical-align: top;
  white-space: nowrap;
`;

const Stack = styled.style`
  spacing: 1;
  display: flex;
  justify-content: center;
  margintop: 10px;
  marginright: 10px;
  margin-bottom: 10px;
`;

export { Stack, Button };
