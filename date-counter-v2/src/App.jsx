/** @format */

import {useState} from "react";
import "./index.css";

export default function App() {
    return (
        <div className="App">
            <Counter/>
        </div>
    );


}
console.log('test')
function Counter() {

    const [step, setStep] = useState(1);
    const [count, setCount] = useState(0);

    const date = new Date();
    date.setDate(date.getDate() + count);

    function handlePrev() {
        setStep((s) => s - 1);
    }

    function handleNext() {
        setStep((s) => s + 1);
    }

    function countTrackerSubtract() {
        setCount((c) => c - step);
    }

    function countTrackerPlus() {
        setCount((c) => c + step);
    }

    return (
        <div>
            <div style={{display: "flex", justifyContent: "center", gap: "5px"}}>
                <input type='range' min='0' max='10'/>

                <button style={{height: "25px", width: "25px"}} onClick={handlePrev}>
                    -
                </button>
                <div>Step: {step}</div>
                <button style={{height: "25px", width: "25px"}} onClick={handleNext}>
                    +
                </button>

            </div>

            <div style={{display: "flex", justifyContent: "center", gap: "5px"}}>
                <button style={{height: "25px", width: "25px"}} onClick={countTrackerSubtract}>
                    -
                </button>
                <div>Count: {count}</div>
                <button style={{height: "25px", width: "25px"}} onClick={countTrackerPlus}>
                    +
                </button>
            </div>

            <span>
        {count === 0 ? " Today is " : count > 0 ? ` ${count} days from today is ` : ` ${count} days ago was `}
      </span>
            <span>{date.toDateString()}</span>
        </div>
    );
}

// function addDays(date, days) {
//   let result = new Date(date);
//   result.setDate(result.getDate() + days);
//   return result;
// }
