import "../SearchBox/SearchBox.css";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useState } from "react";
import { colors } from "@mui/material";

export default function SearchBox({ updateInfo }) {
  let [city, setCity] = useState("");
  let [error, setError] = useState(false);
  const API_URL = "https://api.openweathermap.org/data/2.5/weather";
  const API_KEY = "79496f5a119d1f67c81047abdbbd2a8f";

  let getWeatherInfo = async () => {
    try {
      let res = await fetch(
        `${API_URL}?q=${city}&appid=${API_KEY}&units=metric`
      );
      let jsonRes = await res.json();

      let result = {
        temp: jsonRes.main.temp,
        feelsLike: jsonRes.main.feels_like,
        humidity: jsonRes.main.humidity,
        pressure: jsonRes.main.pressure,
        weather: jsonRes.weather[0].main,
        description: jsonRes.weather[0].description,
        city: jsonRes.name,
        wind: jsonRes.wind.speed,
        sunrise: jsonRes.sys.sunrise,
        sunset: jsonRes.sys.sunset,
        temp_min: jsonRes.main.temp_min,
        temp_max: jsonRes.main.temp_max,
        visibility: jsonRes.visibility,
        clouds: jsonRes.clouds.all,
      };
      console.log(result);
      return result;
    } catch (err) {
      throw err;
    }
  };

  let handleChange = (e) => {
    setCity(e.target.value);
  };

  let handleSubmit = async (e) => {
    try {
      e.preventDefault();
      console.log(city);
      setCity("");
      let newInfo = await getWeatherInfo();
      updateInfo(newInfo);
    } catch (err) {
      setError(true);
    }
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
        <Button variant="contained" type="submit">
          Submit
        </Button>
        {error && <p style={{color : "red"}} >No such place in the weather data.</p>}
      </form>
    </div>
  );
}
