import React, {useState} from 'react';
import './App.css';
import {Counter} from "./components/counter/Counter";
import {SettingOfCounter} from "./components/settingOfCounter/SettingOfCounter";

export function App() {

    const [startCounter, setStartCounter] = useState(0);
    const [maxCounter, setMaxCounter] = useState(1);

    function setCurrentCounterValue(start: number, end: number) {
        setStartCounter(start)
        setMaxCounter(end)
    }

    return (
        <div className="App">
            <SettingOfCounter startCounter={startCounter}
                              maxCounter={maxCounter}
                              setCurrentCounterValue={setCurrentCounterValue}
            />
            <Counter startCounter={startCounter} maxCounter={maxCounter}/>
        </div>
    );
}

