import React from 'react';
import Sun from '../images/sun.png';
import Cloudy from '../images/cloudy.png';
import Rain from '../images/rain.png';
import Snow from '../images/snowflake.png';
import Wind from '../images/wind.png';

const Today = ({weather}) => {

    const getTodaysWeather = () =>{
        if(weather.main) return ((Math.round(weather.main.temp) + '°F'));
    }

    const getCity = () =>{
        if(weather.main) return (weather.name);
    }

    const getTodaysWeatherImage = () =>{
        let weatherType;
        if(weather.weather) {
            weatherType = (weather.weather[0].main);
        }
      
        switch (weatherType){
            case 'Clouds':
                return <img src={Cloudy} alt="Clouds" width="210px" />
            case 'Rain':
                return <img src={Rain} alt="Rain" width="210px"/>
            case 'Clear':
                return <img src={Sun} alt="Sun" width="210px"/>
            case 'Snow':
                return <img src={Snow} alt="Snow" width="210px"/>
            case 'Wind':
                return <img src={Wind} alt="Wind" width="210px"/>   
            default:
                console.log("default")
        }
    }
    
    const WEATHERSTYLE ={
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor:"#F2F2F2",
        margin:"0 35%",
        boxShadow: "7px 10px 12px -5px rgba(0,0,0, 0.30)",
        borderRadius: "20px"
    }
        
     

    return (
        <div style={WEATHERSTYLE}>
            <div>
                <div style={{fontSize:"35px",fontFamily:"'Comic Sans MS', cursive, sans-serif",color:"#01455B",paddingTop:"5px"}}>
                    {getCity()}
                </div>
            </div>
            <div style={{
                maxWidth:"20%",
                padding: "2px",
            }}>
            </div>
            <div>
                {getTodaysWeatherImage()}
            </div>
            <div style={{
                fontSize: "35px",
                fontFamily:"'Comic Sans MS', cursive, sans-serif",
                color:"#01455B",
                paddingBottom:"5px"
            }}>
                {getTodaysWeather() + " Today"}
            </div>
        </div>
    )
}

export default Today;