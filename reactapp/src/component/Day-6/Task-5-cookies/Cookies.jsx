import { useEffect } from "react"

function Cookies(){

    function setCookies(name, value, daysToLive){
        const date = new Date();
        date.setTime(date.getTime() + (daysToLive * 24 * 60 * 60 * 1000));
        let expires = "expires="+date.toUTCString();
        document.cookie = `${name}=${value}; ${expires}; path=/`
    }

    function deleteCookie(name){
        setCookies(name, null, null);
    }
    
    useEffect(()=>{
        setCookies("Name", "Pallavi", 365);
        setCookies("lastName", "Gaikwad", 365);
        setCookies("Skill", "React", 365);
        console.log(document.cookie);
        deleteCookie("Name");
    });

    return(
        <>
        </>
    )
}

export default Cookies;