import { useEffect } from "react"

function ArrayObj(){

    useEffect(()=>{
        let obj = [
            {name:"Effie Baldwin",age:52, address:"1446 Cocwi Court"},
            {name:"Lottie Steele",age:45, address:"1487 Hifo Place"},
            {name:"Leo Cross",age:48, address:"519 Kozwi Avenue"}
        ]

       obj.map((obj)=> console.log(obj.name))
    })
    return(
        <></>
    )
}

export default ArrayObj;