import React, {ChangeEvent, useState} from "react";
import {StyledLeftBlock, ErrorMessage, StyledCounter, StyledRightBlock} from "./Counter.styles";


export type CounterPropsType = {}


export const Counter = (props: CounterPropsType) => {

    const [ptintValue, setPtintValue] = useState<number>(0)
    const [startValue, setStartValue] = useState<number>(0)
    const [maxValue, setMaxValue] = useState<number>(0)
    const [error, setError] = useState<boolean>(false)
    const [disabledRightBlock, setDisabledRightBlock] = useState<boolean>(true)


    const onSetClickHandler = () => {
        if (!error) {
            setPtintValue(+startValue)
            setDisabledRightBlock(false)
        } else {
            setDisabledRightBlock(true)
        }
    }

    const onChangeMaxValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
        const newValue=+e.currentTarget.value
        setMaxValue(newValue)
        setDisabledRightBlock(true)
        newValue > startValue ? setError(false) : setError(true)

    }

    const onChangeStartValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
        const newValue=+e.currentTarget.value
        setStartValue(newValue)
        setDisabledRightBlock(true)
        maxValue > newValue ? setError(false) : setError(true)


    }
    return (
        <StyledCounter>
            <StyledLeftBlock>#левый блок
                <ErrorMessage>{error && 'ERROR'}</ErrorMessage>
                <div>
                    max value: <input value={maxValue} type={"number"} onChange={onChangeMaxValueHandler}/>
                </div>

                <div>
                    start value: <input value={startValue} type={"number"} onChange={onChangeStartValueHandler}/>
                </div>

                <div>

                    <button
                        onClick={onSetClickHandler}
                    >
                        set
                    </button>

                </div>
            </StyledLeftBlock>


            <StyledRightBlock>#правый блок
                {disabledRightBlock ?
                    <div>PRESS SET</div>
                    :
                    <>
                        <div>
                            {ptintValue}
                        </div>
                        <div>
                            <button disabled={ptintValue >= maxValue || error} onClick={() => {
                                setPtintValue(+ptintValue + 1)
                            }}>
                                inc
                            </button>
                            <button disabled={error} onClick={() => {
                                setPtintValue(startValue)
                            }}>
                                reset
                            </button>
                        </div>
                    </>}
            </StyledRightBlock>
        </StyledCounter>
    )

}