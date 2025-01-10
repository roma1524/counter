import React, {useState} from 'react';
import './SettingOfCounter.css'

type SettingOfCounterPropsType = {
    startCounter: number
    maxCounter: number
    setCurrentCounterValue: (start: number, end: number) => void
}

export const SettingOfCounter = (props: SettingOfCounterPropsType) => {

    const [counterForBegin, setCounterForBegin] = useState(props.startCounter);
    const [counterForEnd, setCounterForEnd] = useState(props.maxCounter);

    function maxOnChangeHandler(e: React.ChangeEvent<HTMLInputElement>) {
        setCounterForEnd(+e.currentTarget.value);
    }

    function startOnChangeHandler(e: React.ChangeEvent<HTMLInputElement>) {
        setCounterForBegin(+e.currentTarget.value);
    }

    function setHandler() {
        props.setCurrentCounterValue(counterForBegin, counterForEnd)
    }

    return (
        <div className='setting-of-counter'>
            <div className="inner">
                <div>
                    <label htmlFor="max">max value</label>
                    <input type="number" id='max' value={counterForEnd} onChange={maxOnChangeHandler}/>
                </div>
                <div>
                    <label htmlFor="start">start value</label>
                    <input type="number" id='start' value={counterForBegin} onChange={startOnChangeHandler}/>
                </div>
            </div>
            <div>
                <button onClick={setHandler}>set</button>
            </div>
        </div>
    );
};

