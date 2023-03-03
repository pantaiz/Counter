import styled from "styled-components";

interface Props {
    errorInputs:boolean
}
export const StyledUniversalInput = styled.input<Props>`
  width: 200px;
  font-size: 13px;
  padding: 6px 0 4px 10px;
  border: 1px solid #cecece;
  border-radius: 8px;
  box-shadow: -22px 13px 38px 10px rgba(69, 156, 152, 0.2);
  outline:none;
  border: ${props => props.errorInputs ? "#CC6B6BFF 1px solid" : "1px solid #cecece"} ;
  background: ${props => props.errorInputs ? "#CC6B6BFF" :"#F6F6f6"};
`