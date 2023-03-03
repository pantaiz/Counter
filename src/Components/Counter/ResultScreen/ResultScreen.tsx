import React, {FC} from "react";
import {PrintValueStyle, StyledResultScreen, ErrorMessage, ErorrImage} from "./ResultScreen.styles";
import {UniversalButton} from "../UniversalElement/Button/UniversalButton";

type ResultScreenPropsType = {
    disabledRightBlock: boolean,
    ptintValue: number
    maxValue: number
    disableIncButton: boolean
    disableResetButton: boolean
    error:string,
    onResetClickHandler: () => void
    onIncClickHandler: () => void
}

export const ResultScreen: FC<ResultScreenPropsType> = (
    {
        disabledRightBlock,
        disableIncButton,
        disableResetButton,
        ptintValue,
        maxValue,
        error,
        onResetClickHandler,
        onIncClickHandler
    }
) => {
    return (
        <StyledResultScreen>
            {error?<ErrorMessage>{error}
                { error&&<ErorrImage src={'https://www.meme-arsenal.com/memes/f049a0c27e77dff67c3ed78c6ce99187.jpg'}/>}</ErrorMessage>:<>
            <h3>OUTPUT </h3>

            {disabledRightBlock ?
                <div>Enter the source data</div>
                :
                <>
                    <PrintValueStyle max={ptintValue >= maxValue}>
                        {ptintValue}
                    </PrintValueStyle>
                    <div>
                        <UniversalButton
                            title={'inc'}
                            disabled={disableIncButton}
                            onClick={onIncClickHandler}
                        />
                        <UniversalButton
                            title={'reset'}
                            disabled={disableResetButton}
                            onClick={onResetClickHandler}
                        />
                    </div>
                </>}</>}
        </StyledResultScreen>
    )

}

