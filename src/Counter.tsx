import React, {ChangeEvent, useState} from "react";
import { ErrorMessage, StyledCounter, StyledBlock} from "./Counter.styles";


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
        newValue > startValue && startValue >=0&& newValue>=0? setError(false) : setError(true)

    }

    const onChangeStartValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
        const newValue=+e.currentTarget.value
        setStartValue(newValue)
        setDisabledRightBlock(true)
        maxValue > newValue &&newValue >=0&& maxValue>=0 ? setError(false) : setError(true)



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

                    <button
                        onClick={onSetClickHandler}
                        disabled={error||!disabledRightBlock}
                    >
                        set
                    </button>
                    <ErrorMessage>{error && 'ERROR'}</ErrorMessage>
                </div>
            </StyledBlock>


            <StyledBlock>
                <h3>OUTPUT </h3>
                {disabledRightBlock ?
                    <div>Enter the source data</div>
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
            </StyledBlock>
        </StyledCounter>
    )

}