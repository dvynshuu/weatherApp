import "../SearchBox/SearchBox.css";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useState } from "react";

export default function SearchBox() {
    let [city, setCity] = useState("");

    const API_URL = "https://api.openweathermap.org/data/2.5/weather"
    const API_KEY = "79496f5a119d1f67c81047abdbbd2a8f";

    let getWeatherInfo = async ( ) => {
        let res = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`)
        let jsonRes = await res.json();
        console.log(jsonRes);

        let result = {
            temp: jsonRes.main.temp,
            humidity: jsonRes.main.humidity,
            pressure: jsonRes.main.pressure,
            weather: jsonRes.weather[0].main,
            description: jsonRes.weather[0].description,
            city: jsonRes.name,
            country: jsonRes.sys.country,
            wind: jsonRes.wind.speed,
            sunrise: jsonRes.sys.sunrise,
            sunset: jsonRes.sys.sunset,
            temp_min: jsonRes.main.temp_min,
            temp_max: jsonRes.main.temp_max,
            visibility: jsonRes.visibility,
            clouds: jsonRes.clouds.all
        }
    }

  let handleChange = (e) => {
    setCity(e.target.value);
  };

  let handleSubmit = (e) => {
    e.preventDefault();
    console.log(city);
    setCity("");
    getWeatherInfo();
  };

  return (
    <div className="searchbox">
      <h3>Search for the weather</h3>
      <form onSubmit={handleSubmit}>
        <TextField
          id="city"
          label="City-Name"
          variant="outlined"
          required
          value={city}
          onChange={handleChange}
        />
        <br />
        <br />
        <Button 
         variant="contained"
         type="submit">
          Submit
        </Button>
      </form>
    </div>
  );
}
