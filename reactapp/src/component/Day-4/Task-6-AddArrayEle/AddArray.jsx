import {useState} from 'react'
import './addArray.css'

function AddArrayEle(){
    const [arr, setArr] = useState(['a','b','c','d','e','f']);

     function addEle(){
        let val = document.getElementById("inputVal");
        setArr([val.value, ...arr]);
        val.value="";
     }
    return(
        
        <div>
        <h2>{arr.join(",")}</h2>
        <input type="text" id='inputVal' />
        <button onClick={addEle}>Add</button>
        </div>
    )
}

export default AddArrayEle;