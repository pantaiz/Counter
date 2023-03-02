import React, {ChangeEvent, FC} from "react";
import {StyledUniversalInput} from "./UniversalInput.styles";

type UniversalInputProps={
    textBefor:string
    value:number
    type:'number'
    onChange:(e:ChangeEvent<HTMLInputElement>)=>void,
    onKeyDown?:()=>void
}


export const UniversalInput:FC<UniversalInputProps>=(
    {
        textBefor,
        value,
        type,
        ...props
    }
    )=>{
    return (<>
            {textBefor}
            <StyledUniversalInput
                value={value}
                type={type}
                onChange={(e)=>props.onChange(e)}/>
        </>

    )
}