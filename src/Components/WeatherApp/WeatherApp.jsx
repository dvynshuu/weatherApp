import SearchBox from "../SearchBox/SearchBox.jsx";
import InfoBox from "../InfoBox/InfoBox.jsx";
import { useState } from "react";
export default function WeatherApp() {
  const [weatherinfo, setweatherinfo] = useState({
    city: "Doiwala",
    feelsLike: 21.09,
    temp: 21.33,
    humidity: 60,
    description: "haze",
    temp_min: 20.07,
    temp_max: 22.25,
    wind: 2.1,
    sunrise: "16:30:00",
    sunset: "06:30:00",
  });

  let updateInfo = (newInfo) => {
    setweatherinfo(newInfo)
  }

  return (
    <div className="main">
      <SearchBox updateInfo = {updateInfo} />
      <InfoBox info = {weatherinfo} />
    </div>
  );
}
