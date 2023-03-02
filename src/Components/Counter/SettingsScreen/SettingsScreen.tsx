import React, {ChangeEvent, FC} from "react";
import {StyledSettingsScreen, ErrorMessage} from "./SettingsScreen.styles";
import {UniversalInput} from "../UniversalElement/Input/UniversalInput";
import {UniversalButton} from "../UniversalElement/Button/UniversalButton";

type SettingsScreeProps = {
    maxValue: number
    startValue: number

    onChangeMaxValueHandler: (e: ChangeEvent<HTMLInputElement>) => void,
    onChangeStartValueHandler: (e: ChangeEvent<HTMLInputElement>) => void,

    onSetClickHandler: () => void
    disableSetButton: boolean
    error: boolean
}

export const SettingsScreen: FC<SettingsScreeProps> = (
    {
        maxValue,
        onChangeMaxValueHandler,
        startValue,
        onChangeStartValueHandler,
        disableSetButton,
        onSetClickHandler,
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
            />
            <UniversalInput textBefor={'start value:'}
                            value={startValue}
                            type={"number"}
                            onChange={onChangeStartValueHandler}
            />
            <UniversalButton title={'set'} disabled={disableSetButton} onClick={onSetClickHandler}/>
            <ErrorMessage>{error && 'ERROR'}</ErrorMessage>
        </StyledSettingsScreen>
    )

}

