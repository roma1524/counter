import React from 'react';
import './App.css';
import {Counter} from "./components/counter/Counter";
import {SettingOfCounter} from "./components/settingOfCounter/SettingOfCounter";

export function App() {
    return (
        <div className="App">
            <SettingOfCounter/>
            <Counter/>
        </div>
    );
}

