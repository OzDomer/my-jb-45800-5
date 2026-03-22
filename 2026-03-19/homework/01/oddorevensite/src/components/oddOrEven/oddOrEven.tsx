import { useState } from 'react'
import './oddOrEven.css'
function OddOrEven() {
    const [counter, setCounter] = useState(0)
    const color = counter % 2 ? "red" : "purple"
    return (
        <div className="OddOrEven">
            <button onClick={() => setCounter(prev => prev + 1)}>add 1</button>
            <button onClick={() => setCounter(prev => prev - 1)}>subtract 1</button>
            <button onClick={() => setCounter(0)}>reset</button>
            <p className="counter" style={{ color }}>{counter}</p>
        </div >
    )
}
export default OddOrEven