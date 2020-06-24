import React, {useState} from 'react'

function StateDemoFunction() {
    const [counter, setCounter] = useState(0);
    return (
        <div>
            Counter is : { counter } <br/>
            <button onClick= {()=>setCounter(counter + 1)}> count {counter} </button>
        </div>
    )
}

export default StateDemoFunction
