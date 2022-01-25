import styled from 'styled-components';

const ButtonGroupWrapper = styled.div`
  height: 30px;
  margin-right: 70px;
`;

const Button = styled.button` position: relative;
  display: inline-block;
  padding: 15px 50px;
  border-radius: 4px;
  color: black;
  text-decoration: none;
  text-transform: uppercase;
  overflow: hidden;
  margin: 25px;
  font-family: "Roboto", sans-serif;
  filter: hue-rotate(0deg);
  border: 2px solid black;
  transition: all 0.1s linear;

  &:hover {
    border: 1px solid blue;
    span {
      position: absolute;
      display: block;

      &:nth-child(1) {
        filter: hue-rotate(0deg);
        top: 0;
        left: 0;
        width: 100%;
        height: 3px;
        background: linear-gradient(90deg, transparent, #3a86ff);
        animation: animate1 1s linear infinite;
      }`;

export { ButtonGroupWrapper, Button };
