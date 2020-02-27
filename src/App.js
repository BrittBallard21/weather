import React , {useState, useEffect} from 'react';
import './App.css';
import Today from './Components/Today';
import Form from './Components/Form';
import Axios from 'axios';
import FiveDay from './Components/FiveDay';

function App() {
  const [weather, setWeather] = useState({});
  const [zipCode, setZipCode] = useState('92602');
  const [zipCodeBox,setZipCodeBox] = useState('');
  const [fiveDayWeather, setFiveDayWeather] = useState({});

  //key1 = 610a0fb4717bc43d6899ee28f64aaf56
  //key2 = 59d6b4a3e198d52f85b5255d190bfb69
  const fetchData = async() => {
    const response = await Axios.get('https://api.openweathermap.org/data/2.5/weather?zip=' + zipCode + '&APPID=59d6b4a3e198d52f85b5255d190bfb69&units=imperial');

    setWeather(response.data);
}
  const fetchData2 = async() => {
    const response = await Axios.get('https://api.openweathermap.org/data/2.5/forecast?zip=' + zipCode + '&APPID=59d6b4a3e198d52f85b5255d190bfb69&units=imperial');

    setFiveDayWeather(response.data);   
  
  }

    useEffect(() => {
      fetchData();
      fetchData2();
    }, [zipCode]);

    const submitHandler = (e) => {
      e.preventDefault();

      setZipCode(zipCodeBox);
      setZipCodeBox('');
    }


     
  return (
    <div className="App">
      <h1 style={{fontFamily:"'Comic Sans MS', cursive, sans-serif",color:"#01455B",fontSize:"45px"}}>Weather Forecast</h1>
      <div style={{paddingBottom:"2%"}}>
        <Today weather={weather}/>
      </div>
      <div style={{paddingBottom:"2%"}}>
        <Form zipCodeBox={zipCodeBox} setZipCodeBox={setZipCodeBox}submitHandler={submitHandler}/>
      </div>
      <div>
        <FiveDay fiveDayWeather={fiveDayWeather}/>
      </div>
    </div>
  );
}

export default App;
