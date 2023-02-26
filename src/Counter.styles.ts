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


export const SetButtonStyled=styled.button`
    background: transparent;
    border: 2px solid transparent;
    text-align: center;
    font-size: 22px;
    border-radius: 15px;
    padding: 10px 25px;
    cursor: pointer;
    margin: 0 10px;
    transition: all 0.05s ease-in-out;`
