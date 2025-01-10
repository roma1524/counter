import React, {useState} from 'react';
import './Counter.css'

type CounterPropsType = {
    startCounter: number
    maxCounter: number
}

export const Counter = (props: CounterPropsType) => {

    const [value, setValue] = useState(props.startCounter);
    const [stopValue, setStopValue] = useState(props.maxCounter);


    function incrementHandler() {
        if(value >= stopValue) {

        } else {
            setValue(value + 1)
        }
    }

    function resetHandler() {
        setValue(props.startCounter)
    }

    return (
        <div className='counter'>
            <div className='counter_title'>
                <h1>{value}</h1>
            </div>
            <div className='counter_btns'>
                <button onClick={incrementHandler}>inc</button>
                <button onClick={resetHandler}>reset</button>
            </div>
        </div>
    );
};

