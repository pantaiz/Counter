import styled from "styled-components";

export const StyledResultScreen = styled.div`
  font-size: 1.5em;
  text-align: center;
  color: #709bdb;
  padding: 20px;
  border-radius: 20px;
  border: 2px solid #709bdb;
  margin: 10px;
  width: 350px;

`;

export const ErrorMessage = styled.div`
  font-size: 1.5em;
  text-align: center;
  color: #db7070;

`;
export const ErorrImage = styled.img`
  position: fixed;
  right: 0px;
  bottom: 100px;
  width: 20%;
  border-radius: 10px;
  opacity: 0;
  animation: ani 4s forwards;
  @keyframes ani {
    0% {opacity: 0;}
    100% {opacity: 1;}
`

interface PrintValueStyleProps {
    max: boolean
}

export const PrintValueStyle = styled.div<PrintValueStyleProps>`
  font-weight: 600;
  font-size: 32px;
  color: ${props => props.max ? "rgba(132, 219, 112)" : "black"};
`