import { useState } from "react"

function Count(){

    const [state, setState] = useState(0);
    return(
        <>
        <br />
        <CountAdd state={state} setState={setState}/>
        <br />
        </>
    )
}

function CountAdd(props){

    function countAdd(){
        let val = Number(document.getElementById("inputNum").value);
        let prev = val;
        props.setState(prev + props.state);
        console.log(val);
    }
    return(
        <>
        <input type="number" id="inputNum" style={{'marginLeft':'200px', 'height':'30px', 'width':'200px'}} /> <br />
        <h2 style={{'marginLeft':'295px'}}> {props.state} </h2> 
        <button onClick={countAdd} style={{'marginLeft':'260px','marginBottom':'200px', 'height':'30px', 'padding':'10px', 'backgroundColor':'blue', 'color':'white'}}>Click for Add</button>
        </>
    )

}

export default Count;