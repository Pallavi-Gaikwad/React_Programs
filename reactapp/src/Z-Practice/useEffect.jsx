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
    // let [id, setId] = useState(1);
    

    //  const displayData = ()=>{
    //     const inputVal = document.getElementById("inputId");
    //     // console.log(inputVal.value);
    //     return inputVal.value;
    // }
   
    useEffect(()=>{
        let inputVal = document.getElementById("inputId");
        const btn = document.getElementById("btn");
        // setId(inputVal.value);
        btn.addEventListener('click',()=>{
            console.log(inputVal.value);
            fetch( `https://freetestapi.com/api/v1/students/${inputVal.value}`)
            .then(response => response.json())
            .then(data=> setInfo(data.name))
            .catch(err => {console.log(`data is not found please enter correct id`)})
        });
    }, []);
    
    return(
        <>
            <input type="number" id="inputId" />
            <button id="btn">Search</button>
            <p>{info}</p>
        </>
    )
}

export default Information;