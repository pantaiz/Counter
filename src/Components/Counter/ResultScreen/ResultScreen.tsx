import React, {FC} from "react";
import {PrintValueStyle, StyledResultScreen} from "./ResultScreen.styles";
import {UniversalButton} from "../UniversalElement/Button/UniversalButton";

type ResultScreenPropsType = {
    disabledRightBlock: boolean,
    ptintValue: number
    maxValue: number
    disableIncButton: boolean
    disableResetButton: boolean
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

        onResetClickHandler,
        onIncClickHandler
    }
) => {
    return (
        <StyledResultScreen>
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
                </>}
        </StyledResultScreen>
    )

}

