import {useState, useEffect} from 'react';
function LocalStorageDemo(){

    let [state, setState] = useState('')

    useEffect(()=>{
    
        let btn = document.getElementById("btn");
        btn.addEventListener("click",()=>{
            let nameVal  = document.getElementById('inputVal');
            localStorage.setItem('name',nameVal.value);
            let val = localStorage.getItem('name');
            setState(val);
        })
    });
    return(
        <>
        <label htmlFor="inputVal">Name: </label>
        <input type="text" id="inputVal"/> <br /> <br />
        <button id='btn' style={{"border":"1px solid black"}}>Get your name!</button>
        <h3>{state}</h3>
        </>
    )
}

export default LocalStorageDemo;