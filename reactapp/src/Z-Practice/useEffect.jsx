import { useEffect, useState } from "react"

// function MyComponent(){
//     let [count, setCount]  = useState(0);

//     // Case 1: Calling function on every load
//     useEffect(()=>{
//         console.log("Called on every load");
//     });

//     // Case 2: called on only once (Mounting phase)
//     useEffect(()=>{
//         console.log("Called only once at beginning");
//     },[]);

//     // Case 3: called function on only count (Updating phase for perticuler Component)
//     useEffect(()=>{
//         console.log(`Count is: ${count}`)
//     },[count]);

//     // Unmounting Component
//     useEffect(()=>{
//         console.log("Inside Useeffect of Unmount");
//         return()=>{
//             console.log("This is unmount function is called");
//         }
//     },[]);

//     return(
//         <>
//         <h2>{count}</h2>
//         <button onClick={()=>{setCount(count+1)}}>Count</button>
//         </>
//     )
// }

function Information(){

    let [info, setInfo] = useState('');
    

    //  const displayData = ()=>{
    //     const inputVal = document.getElementById("inputId");
    //     // console.log(inputVal.value);
    //     return inputVal.value;
    // }
   
    useEffect(()=>{
        const fetchData = async ()=>{
            try{
                const inputVal = document.getElementById("inputId").value;
                if(inputVal !== null){
                    const response = await fetch(`https://freetestapi.com/api/v1/students/${inputVal}`);
                    const json = await response.json();
                    console.log(json.name);
                }
               }catch(err){
                console.log(err);
               }
            };
        fetchData();
    },[]);
    return(
        <>
            <input type="number" id="inputId"/>
            {/* <button onClick={displayData}>Search</button> */}
            <p>{info}</p>
        </>
    )
}

export default Information;