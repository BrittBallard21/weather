import React from 'react';
import Sun from '../images/sun.png';
import Cloudy from '../images/cloudy.png';
import Rain from '../images/rain.png';
import Snow from '../images/snowflake.png';
import Wind from '../images/wind.png';

const FiveDay = ({fiveDayWeather}) => {
    let fiveDays =[];

    const getFiveDaysWeather = () =>{
     

        if(fiveDayWeather.list) {
          
           

            fiveDayWeather.list.forEach(weatherEntry => {
                if (!fiveDays.find((day) => day.dt_txt.split(" ")[0] === weatherEntry.dt_txt.split(" ")[0])){
                    fiveDays.push(weatherEntry);
                }else{
                    // let weatherIndex = fiveDays.indexOf((day) => day.dt_txt.split(" ")[0] === weatherEntry.dt_txt.split(" ")[0]);
                    console.log(fiveDays.forEach((day, index) => {
                        if(day.dt_txt.split(" ")[0] === weatherEntry.dt_txt.split(" ")[0]) return index;
                    })); 

                }
                
            })
            if(fiveDays.length > 5){fiveDays.splice(5,1);}
        }
    
    }

     
    const getFiveDaysWeatherImage = (weatherType,weather) => {
        switch (weatherType){
                case 'Clouds':
                    return (
                        <div>
                             <img src={Cloudy} alt="Clouds" width="90px" />
                        </div>
                    );
                case 'Rain':
                    return (
                        <div>
                            <img src={Rain} alt="Rain" width="90px"/>
                        </div>
                    );
                case 'Clear':
                    return (
                        <div>
                            <img src={Sun} alt="Sun" width="90px"/>
                        </div>
                    );
                case 'Snow':
                    return (
                        <div>
                            <img src={Snow} alt="Snow" width="90px"/>
                        </div>
                    );
                case 'Wind':
                    return (
                    <div>
                        <img src={Wind} alt="Wind" width="90px"/>
                    </div>
                );
                default:
            }

            
    }

    const getFiveDaysWeatherDay = (weatherDate) =>{
        let parsedDate = new Date(weatherDate);

        switch(parsedDate.getDay()){
            case 0:
                return "Sunday";
            case 1:
                return "Monday";
            case 2:
                return "Tuesday";
            case 3:
                return "Wednesday";
            case 4:
                return "Thursday";
            case 5:
                return "Friday";
            case 6:
                return "Saturday";
            default:
        }
    }
        
  
    
    const WEATHERSTYLE ={
        backgroundColor:"#F2F2F2",
        padding:"15px",
        margin:"20px",
        boxShadow: "7px 10px 12px -5px rgba(0,0,0, 0.56)",
        borderRadius: "20px",
        fontSize: "25px",
        fontFamily:"'Comic Sans MS', cursive, sans-serif",
        color:"#01455B",
        width: "10%"
    }

    const STYLE2 ={
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
    }
        
    const STYLE ={
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            marginRight: "3px",
            
        }
     

    return (
        <div>
            <div>
                {getFiveDaysWeather()}
                <div style={STYLE}>
                {fiveDays.map((day) => (
                    <div style={WEATHERSTYLE}>
                            <div style={STYLE2}>   
                                {getFiveDaysWeatherImage(day.weather[0].main)}
                            </div>
                            <div style={STYLE2}>
                                {Math.round(day.main.temp) + '°F'}
                            </div>
                            <div style={STYLE2}>
                                {getFiveDaysWeatherDay(day.dt_txt)}
                            </div>
                           
                    </div>
                ))}
                </div>
            </div>
        </div>
    )
}

export default FiveDay;