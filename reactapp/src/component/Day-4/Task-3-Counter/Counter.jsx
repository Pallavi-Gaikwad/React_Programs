import { useState } from "react"

function Counter(){

    let [count, setCount] = useState(0);

    function countInc(){
        setCount(count + 1);
        if(count === 10){
            setCount(0);
        }
    }

    function countDec(){
        setCount(count - 1);
        if(count === 0){
            setCount(10);
        }
    }

    return(
        <>
        <h2 style={{'marginLeft':'610px','marginTop':'200px',}}>{count}</h2>
        <button onClick={countInc} style={{'marginLeft':'500px', 'backgroundColor':'purple', 'padding':'10px', 'color':'white'}}>Increase Count</button>
        <button onClick={countDec} style={{'marginLeft':'30px', 'backgroundColor':'purple', 'padding':'10px', 'color':'white'}}>Decrease Count</button>
        </>
    )
}

export default Counter;