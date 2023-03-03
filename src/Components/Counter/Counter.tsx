import React, {ChangeEvent, FC, useEffect, useState} from "react";
import {StyledCounter} from "./Counter.styles";

import {SettingsScreen} from "./SettingsScreen/SettingsScreen";
import {ResultScreen} from "./ResultScreen/ResultScreen";
import {errorInputsType} from "../../App";


export type CounterPropsType = {
    //Settings Screen
    maxValue: number,
    startValue: number,
    disableSetButton: boolean,
    errorInputs:errorInputsType
    error: string,
    onChangeMaxValueHandler: (e: ChangeEvent<HTMLInputElement>) => void,
    onChangeStartValueHandler: (e: ChangeEvent<HTMLInputElement>) => void,
    onSetClickHandler: () => void,


    //Result Screen
    ptintValue: number,
    disabledRightBlock: boolean,
    disableIncButton: boolean,
    disableResetButton: boolean,
    onResetClickHandler: () => void,
    onIncClickHandler: () => void,


}


export const Counter: FC<CounterPropsType> = (
    {
        //Settings Screen
        maxValue,
        startValue,
        onChangeMaxValueHandler,
        onChangeStartValueHandler,
        onSetClickHandler,
        disableSetButton,
        error,
        errorInputs,

        //Result Screen
        disabledRightBlock,
        disableIncButton,
        disableResetButton,
        ptintValue,
        onResetClickHandler,
        onIncClickHandler,
    }
) => {
    return (
        <StyledCounter>
            <SettingsScreen maxValue={maxValue}
                            startValue={startValue}
                            onChangeMaxValueHandler={onChangeMaxValueHandler}
                            onChangeStartValueHandler={onChangeStartValueHandler}
                            onSetClickHandler={onSetClickHandler}
                            disableSetButton={disableSetButton}
                            error={error}
                            errorInputs={errorInputs}
            />
            <ResultScreen disabledRightBlock={disabledRightBlock}
                          disableIncButton={disableIncButton}
                          disableResetButton={disableResetButton}
                          ptintValue={ptintValue}
                          maxValue={maxValue}
                          onResetClickHandler={onResetClickHandler}
                          onIncClickHandler={onIncClickHandler}
                          error={error}
            />
        </StyledCounter>
    )

}

