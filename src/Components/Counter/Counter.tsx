import React, {ChangeEvent, useEffect, useState} from "react";
import {ErrorMessage, StyledCounter, StyledBlock, PrintValueStyle} from "./Counter.styles";
import {UniversalButton} from "./Button/UniversalButton";


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


    const onSetClickHandler = () => {
        if (!error) {
            setPtintValue(+startValue)
            setDisabledRightBlock(false)
        } else {
            setDisabledRightBlock(true)
        }
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

            <StyledBlock>
                <h3>SETTINGS</h3>

                <div>
                    max value: <input value={maxValue} type={"number"} onChange={onChangeMaxValueHandler}/>
                </div>

                <div>
                    start value: <input value={startValue} type={"number"} onChange={onChangeStartValueHandler}/>
                </div>

                <div>
                    <UniversalButton title={'set'} disabled={error || !disabledRightBlock}  onClick={onSetClickHandler}/>
                    <ErrorMessage>{error && 'ERROR'}</ErrorMessage>
                </div>
            </StyledBlock>

            <StyledBlock>
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
                                title={'set'}
                                disabled={ptintValue >= maxValue || error}
                                onClick={() => setPtintValue(+ptintValue + 1)}
                            />
                            <UniversalButton
                                title={'reset'}
                                disabled={error || ptintValue==startValue}
                                onClick={() => setPtintValue(startValue)}
                            />
                        </div>
                    </>}
            </StyledBlock>
        </StyledCounter>
    )

}
