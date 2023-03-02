import styled from "styled-components";


export const StyledUniversalButton = styled.button`
  text-align: center;
  font-size: 22px;
  border-radius: 15px;
  padding: 10px 10px;
  cursor: pointer;
  margin:  10px;
  box-shadow: 0 4px 0 rgba(112, 155, 219, 0.15);
  border: 1px solid rgba(112, 155, 219, 0.15);
  background: rgba(112, 155, 219, 0.25);
  color:black;
  transition: all 0.3s ease-in-out;
  &:hover{
    transform: translateY(-2px);
    background: rgba(132, 219, 112, 0.8);
  } 
  &:disabled{
    border: 1px solid #999999;
    background-color: #cccccc;
    color: #666666;
  } 
  &:active{
    transform: translateY(2px);
    box-shadow: none;
  }
`