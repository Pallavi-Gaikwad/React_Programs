import { useEffect } from "react"

function SetTimeOut(){
    useEffect(()=>{
        let heading = document.getElementById("heading");
        setTimeout(()=>{
            heading.style.backgroundColor = "pink";
        }, 5000)
        
    },[])
    return(
        <>
        <h1 id="heading">Hello this is demo statement</h1>
        </>
    )
}

export default SetTimeOut;