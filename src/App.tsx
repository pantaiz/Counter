import React, {ChangeEvent, useEffect, useState} from 'react';
import './App.css';
import {Counter} from "./Components/Counter/Counter";


function App() {
    const [ptintValue, setPtintValue] = useState<number>(0)
    const [startValue, setStartValue] = useState<number>(0)
    const [maxValue, setMaxValue] = useState<number>(0)
    const [error, setError] = useState<string>('')
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
        const errorValueeLocalStorage = localStorage.getItem('errorValue',)
        if (errorValueeLocalStorage) {
            setError(JSON.parse(errorValueeLocalStorage))
        }
    }, [])

    //push data to local storage
    useEffect(() => {
        localStorage.setItem('startValue', JSON.stringify(startValue))
        localStorage.setItem('maxValue', JSON.stringify(maxValue))
        localStorage.setItem('ptintValue', JSON.stringify(ptintValue))
        localStorage.setItem('errorValue', JSON.stringify(error))
    }, [startValue, maxValue, ptintValue])

    //ACTIVE OR DISABLE BUTTON
    const disableIncButton = !!(ptintValue >= maxValue || error)
    const disableResetButton = !!(error || ptintValue == startValue)
    const disableSetButton = !!(error || !disabledRightBlock)

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
    //LOGIC Input 'Max number'
    const onChangeMaxValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
        const newValue = +e.currentTarget.value
        setMaxValue(newValue)
        setDisabledRightBlock(true)
        if (newValue < startValue) {
            setError('GOOD JOB, MAN! COME ON, BREAK MY APP! YOUR INITIAL VALUE IS GREATER THAN THE MAXIMUM, YOU IDIOT!')
        } else if (startValue < 0) {
            setError('OF COURSE, TRY TO ENTER A NEGATIVE START VALUE AGAIN! MAYBE IT WILL WORK OUT!')
        } else if (newValue < 0) {
            setError('UDE, WHY ARE YOU ENTERING A NEGATIVE MAXIMUM NUMBER?')
        } else if (startValue == newValue) {
            setError('MY GOD, YOU HAVE TWO IDENTICAL NUMBERS, FIX IT!')
        } else {
            setError('')
        }
    }
    //LOGIC Input 'Start number'
    const onChangeStartValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
        const newValue = +e.currentTarget.value
        setStartValue(newValue)
        setDisabledRightBlock(true)
        if (maxValue < newValue) {
            setError('GOOD JOB, MAN! COME ON, BREAK MY APP! YOUR START VALUE IS GREATER THAN THE MAXIMUM, YOU IDIOT!')
        } else if (newValue < 0) {
            setError('OF COURSE, TRY TO ENTER A NEGATIVE START VALUE AGAIN! MAYBE IT WILL WORK OUT!')
        } else if (maxValue < 0) {
            setError(' DUDE, WHY ARE YOU ENTERING A NEGATIVE MAXIMUM NUMBER?')
        } else if (maxValue == newValue) {
            setError('MY GOD, YOU HAVE TWO IDENTICAL NUMBERS, FIX IT!')
        } else {
            setError('')
        }
    }
    return (
        <div className="App">
            <h1>COUNTER</h1>
            <Counter
                maxValue={maxValue}
                startValue={startValue}
                onChangeMaxValueHandler={onChangeMaxValueHandler}
                onChangeStartValueHandler={onChangeStartValueHandler}
                onSetClickHandler={onSetClickHandler}
                disableSetButton={disableSetButton}
                error={error}

                disabledRightBlock={disabledRightBlock}
                disableIncButton={disableIncButton}
                disableResetButton={disableResetButton}
                ptintValue={ptintValue}
                onResetClickHandler={onResetClickHandler}
                onIncClickHandler={onIncClickHandler}
            />
        </div>
    );
}

export default App;
