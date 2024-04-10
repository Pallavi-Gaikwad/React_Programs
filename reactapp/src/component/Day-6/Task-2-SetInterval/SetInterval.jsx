import { useEffect } from "react"

function SetInterval(){

    useEffect(()=>{
        let time = document.getElementById("time");
        let btn = document.getElementById("btn");
        let timeInterval = setInterval(()=>{
            let date = new Date();
            time.innerText = date.toLocaleTimeString();
        }, 1000);

        btn.addEventListener("click",()=>{
            clearInterval(timeInterval);
        });
    })

    
    return(
        <>
        <h2>Digital Time</h2>
        <h3 id="time"> </h3>
        <button id="btn" style={{"border":"1px solid black"}}>Stop Time</button>
        </>
    )
}

export default SetInterval;