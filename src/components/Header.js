import React, {useEffect} from "react";
import{useAll} from "./context/Context";



function Header(){

    const {input,setInput,city,setCity,setWeather} = useAll();
    
    const inputChange = e => setInput(e.target.value)
    const inputSumbit = e => {
        e.preventDefault()
        if(input&& input !==city) setCity(input)
    };

    useEffect(()=>{
        const key=process.env.REACT_APP_WEATHER_API;
        const apiUrl=`http://api.weatherbit.io/v2.0/forecast/daily?city=${city}&lang=tr&days=8&key=${key}`;
        fetch(apiUrl)
        .then(r=>r.json())
        .then(setWeather)
        .catch(error => alert("Dont Data"));
    },[city,setWeather]);
    return(
        <div className="">
        <header className="weatherApp-header">
        <form onSubmit={inputSumbit}>
            <input autoFocus onChange={inputChange} value={input} required></input>
        </form>

        </header>
        </div>
    );
}
export default Header;