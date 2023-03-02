import React, {FC} from "react";
import {StyledUniversalButton} from "./UniversalButton.styles";

type UniversalButtonProps={
    disabled:boolean
    onClick:()=>void
    title:string
}

export const UniversalButton:FC<UniversalButtonProps>=(
    {
        disabled,
        onClick,
        title
    }
    )=>{
    return (
        <StyledUniversalButton onClick={onClick} disabled={disabled}>
            {title}

        </StyledUniversalButton>

    )
}