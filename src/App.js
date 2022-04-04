import logo from './logo.svg';
import './App.css';
import Form from './Component/Form';
import React, {useState} from "react";
import Weather from './Component/Weather';



function App() {

  const [location, setLocation] = useState('');
  const [weather, setWeather] = useState({});

  const API = {
      key: "bf04e01f19447ece58acdbb3d90bf4ab",
      base: "https://api.openweathermap.org/data/2.5/"
    }

  const search = e => {
      fetch(`${API.base}weather?q=${location}&units=metric&APPID=${API.key}`)
      .then(res => res.json())
      .then(result => {
        setWeather(result);
      });
    }



  return (
    <div className="App" >
     <Form setLocation={setLocation} search={search}/>
     <Weather weather={weather} location={location} />
    </div>
  );
}

export default App;
