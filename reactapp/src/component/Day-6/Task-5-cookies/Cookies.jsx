import { useEffect } from "react"

function Cookies(){

    function setCookies(name, value, daysToLive){
        const date = new Date();
        date.setTime(date.getTime() + (daysToLive * 24 * 60 * 60 * 1000));
        let expires = "expires="+date.toUTCString();
        document.cookie = `${name}=${value}; ${expires}; path=/`
    }


    useEffect(()=>{
        setCookies("Name", "Pallavi", 365);
        console.log(document.cookie);
    });

    return(
        <>
        </>
    )
}

export default Cookies;