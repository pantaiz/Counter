import React, {ChangeEvent, useEffect, useState} from "react";
import {StyledCounter} from "./Counter.styles";

import {SettingsScreen} from "./SettingsScreen/SettingsScreen";
import {ResultScreen} from "./ResultScreen/ResultScreen";


export type CounterPropsType = {}


export const Counter = (props: CounterPropsType) => {

    const [ptintValue, setPtintValue] = useState<number>(0)
    const [startValue, setStartValue] = useState<number>(0)
    const [maxValue, setMaxValue] = useState<number>(0)
    const [error, setError] = useState<boolean>(false)
    const [disabledRightBlock, setDisabledRightBlock] = useState<boolean>(true)

    //get data from local storage
    useEffect(() => {
        const startValueLocalStorage = localStorage.getItem('startValue',)
        if (startValueLocalStorage) {
            setStartValue(JSON.parse(startValueLocalStorage))
        }

        const maxValueLocalStorage = localStorage.getItem('maxValue',)
        if (maxValueLocalStorage) {
            setMaxValue(JSON.parse(maxValueLocalStorage))
        }

        const ptintValueLocalStorage = localStorage.getItem('ptintValue',)
        if (ptintValueLocalStorage) {
            setPtintValue(JSON.parse(ptintValueLocalStorage))
        }

    }, [])

    //push data to local storage
    useEffect(() => {
        localStorage.setItem('startValue', JSON.stringify(startValue))
        localStorage.setItem('maxValue', JSON.stringify(maxValue))
        localStorage.setItem('ptintValue', JSON.stringify(ptintValue))
    }, [startValue, maxValue, ptintValue])

    const disableIncButton = ptintValue >= maxValue || error
    const disableResetButton = error || ptintValue == startValue
    const disableSetButton = error || !disabledRightBlock

    //Button "Set"
    const onSetClickHandler = () => {
        if (!error) {
            setPtintValue(+startValue)
            setDisabledRightBlock(false)
        } else {
            setDisabledRightBlock(true)
        }
    }
    //on click Button "inc"
    const onIncClickHandler = () => {
        setPtintValue(+ptintValue + 1)
    }
    //on click Button "reset"
    const onResetClickHandler = () => {
        setPtintValue(startValue)
    }

    const onChangeMaxValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
        const newValue = +e.currentTarget.value
        setMaxValue(newValue)
        setDisabledRightBlock(true)
        newValue > startValue && startValue >= 0 && newValue >= 0 ? setError(false) : setError(true)

    }

    const onChangeStartValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
        const newValue = +e.currentTarget.value
        setStartValue(newValue)
        setDisabledRightBlock(true)
        maxValue > newValue && newValue >= 0 && maxValue >= 0 ? setError(false) : setError(true)


    }
    return (
        <StyledCounter>
            <SettingsScreen maxValue={maxValue}
                            startValue={startValue}
                            onChangeMaxValueHandler={onChangeMaxValueHandler}
                            onChangeStartValueHandler={onChangeStartValueHandler}
                            onSetClickHandler={onSetClickHandler}
                            disableSetButton={disableSetButton}
                            error={error}
            />
            <ResultScreen disabledRightBlock={disabledRightBlock}
                          disableIncButton={disableIncButton}
                          disableResetButton={disableResetButton}
                          ptintValue={ptintValue}
                          maxValue={maxValue}
                          onResetClickHandler={onResetClickHandler}
                          onIncClickHandler={onIncClickHandler}
            />
        </StyledCounter>
    )

}

