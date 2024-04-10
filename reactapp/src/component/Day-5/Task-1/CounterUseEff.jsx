import { useEffect, useState } from "react"

function CounterUseff(){

    let [count, setCount] = useState(0);
    console.log(count);
    
    function counterInc(){
        setCount(count + 1);
    }
    
    function counterDcr(){
        setCount(count - 1);
    }

    useEffect(()=>{
        if(count > 20){
            alert("Your count is greater than 20");
            setCount(20);
        }
        if(count < 0){
            alert("Your count is less than 0");
            setCount(0);
        }
    },[count]);

    return(
        <>
        <h2 style={{'marginLeft':'585px','marginTop':'200px',}}>{count}</h2>
        <button onClick={counterInc} style={{'marginLeft':'500px', 'backgroundColor':'purple', 'padding':'10px', 'color':'white'}}>Increment</button>
        <button onClick={counterDcr}  style={{'marginLeft':'30px', 'backgroundColor':'purple', 'padding':'10px', 'color':'white'}}>Decrement</button>
        </>
    )
}

export default CounterUseff;