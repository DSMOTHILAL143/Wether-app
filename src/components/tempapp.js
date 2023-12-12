import React, { useEffect, useState } from "react";
import "./CSS/style.css"
import {FaStreetView} from "react-icons/fa";

const Tempapp=()=>{
    const [city,setCity]=useState(null);
    const [search,setSearch]=useState("hyderabad");

    // const data= fetch("http://api.openweathermap.org/geo/1.0/direct?q=hyderabad &appid=0b958a95b959c3c846ab296f1de77be4")
    // const dataJson=data.json();
    // console.log(dataJson)
    

    useEffect (()=>{
        const fetchApi= async()=>{
            // const data=await fetch("http://api.openweathermap.org/geo/1.0/direct?q=hyderabad &appid=0b958a95b959c3c846ab296f1de77be4")
            const url=` http://api.openweathermap.org/data/2.5/weather?q=${search} &units=metric&appid=0b958a95b959c3c846ab296f1de77be4`
        
            const response= await fetch(url)
            const jsondata= await response.json()
            setCity(jsondata.main)  
        }
        fetchApi()
    },[search]);
    const handleSearch=(e)=>{
        setSearch(e.target.value)
    }
    return (
        <>
            <center>
                <div  className=" card-style">
                <h1 className="heading-weather">Weather Report</h1>
                <input type="text" className="inputFeild" 
                        onChange={handleSearch}
                />
                { !city ? (<p classNmae="noData">No Data found</p>):
                <div  className="mt-3 rotate-360">
                    <img src="https://cdn.iconscout.com/icon/free/png-512/free-weather-2844887-2365236.png?f=webp&w=256" alt="weather" className="w-25 m-3 "/>
                    <div className="mt-3"> 
                        <h1 className="temp"> <FaStreetView className="icon"/>{search} </h1>
                        <h2 className> {city.temp} </h2>
                        <h5 className="tempmin_max"> Min : {city.temp_min}° Cel  |  Max  :  {city.temp_max}° Cel </h5>
                    </div> 
                </div>}
                
                </div>
                
            </center>








            {/* <div className="main-container">
                <div className="box">
                    <input type="text" className="inputFeild" 
                        onChange={handleSearch}
                    />
                   .rotate-360 {
                    transform: rotate(360deg);
                    }
                
                    <div className="info"> 
                        <h1 className="temp"> <FaStreetView className="icon"/>{search} </h1>
                        <h2 className> {city.temp} </h2>
                        <h5 className="tempmin_max"> Min : {city.temp_max}° Cel  |  Max  :  {city.temp_max}° Cel </h5>
                    </div>  
                    
                
                </div>    
               
                
                {/* <div className="wave -one"> </div>
                <div className="wave -two"> </div>
                <div className="wave -three"> </div> */}
            {/* </></div> */} 
            
        </>
    )
}

export default Tempapp;