import styled from "styled-components";

export const StyledCounter = styled.div`
  display: flex;
  padding: 20px;
  border-radius: 20px;
  justify-content: center;
  margin: 100px;
  box-shadow: 24px -23px 15px 12px rgba(0, 0, 0, 0.1), 0px 10px 15px -3px rgba(0, 0, 0, 0.1);
  background: #f1efef;
`;

export const StyledBlock = styled.div`
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



interface PrintValueStyleProps {
    max: boolean
}

export const PrintValueStyle = styled.div<PrintValueStyleProps>`
  font-weight:600 ;
  font-size: 32px;
  color: ${props => props.max ? "rgba(132, 219, 112)": "black"};
`