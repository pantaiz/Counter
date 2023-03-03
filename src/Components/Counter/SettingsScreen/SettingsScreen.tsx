import React, {ChangeEvent, FC} from "react";
import {StyledSettingsScreen, } from "./SettingsScreen.styles";
import {UniversalInput} from "../UniversalElement/Input/UniversalInput";
import {UniversalButton} from "../UniversalElement/Button/UniversalButton";
import {errorInputsType} from "../../../App";

type SettingsScreeProps = {
    maxValue: number
    startValue: number

    onChangeMaxValueHandler: (e: ChangeEvent<HTMLInputElement>) => void,
    onChangeStartValueHandler: (e: ChangeEvent<HTMLInputElement>) => void,

    onSetClickHandler: () => void
    disableSetButton: boolean
    errorInputs:errorInputsType
    error: string
}

export const SettingsScreen: FC<SettingsScreeProps> = (
    {
        maxValue,
        onChangeMaxValueHandler,
        startValue,
        onChangeStartValueHandler,
        disableSetButton,
        onSetClickHandler,
        errorInputs,
        error
    }
) => {
    return (
        <StyledSettingsScreen>
            <h3>SETTINGS</h3>
            <UniversalInput textBefor={'max value: '}
                            value={maxValue}
                            type={"number"}
                            onChange={onChangeMaxValueHandler}

                            errorInputs={errorInputs.maxInputError} //styled props
            />
            <UniversalInput textBefor={'start value:'}
                            value={startValue}
                            type={"number"}
                            onChange={onChangeStartValueHandler}

                            errorInputs={errorInputs.startInputError} //styled props
            />
            <UniversalButton title={'set'} disabled={disableSetButton} onClick={onSetClickHandler}/>
        </StyledSettingsScreen>
    )

}

