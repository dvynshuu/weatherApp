import "./InfoBox.css";
import Card from "@mui/material/Card";

import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";

import Typography from "@mui/material/Typography";

export default function InfoBox({info}) {
  const init_url =
    "https://images.unsplash.com/photo-1532363741232-e4c99c0e83ea?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8aGF6ZSUyMGNpdHl8ZW58MHx8MHx8fDA%3D";

    const hot_url = "https://images.unsplash.com/photo-1517535088187-bee8563156e1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8aG90JTIwY2l0eXxlbnwwfHwwfHx8MA%3D%3D";
    const cold_url = "https://plus.unsplash.com/premium_photo-1671298144971-1495df61e54f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGNvbGQlMjBjaXR5fGVufDB8fDB8fHww";
    const rainy_url = "https://plus.unsplash.com/premium_photo-1666700698920-d2d2bba589f8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cmFpbnklMjBjaXR5fGVufDB8fDB8fHww";

  return (
    <div className="infobox">
      <h1>Weather Info</h1>
      <div className="container">
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia
            sx={{ height: 150 }}
            image={info.humidity >80 ? rainy_url : info.temp >15 ? hot_url : cold_url }
            title="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {info.city} 
            </Typography>
            <Typography variant="body2" sx={{ color: "text.secondary" }}>
              <p>Temperature = {info.temp}&deg;C </p>
              <p>Humidity = {info.humidity}% </p>
              <p>Temp-min = {info.temp_min}&deg;C </p>
              <p>Temp-max = {info.temp_max}&deg;C </p>
              <p>Wind Speed = {info.wind} m/s </p>
              <p>
                The weather can be described as <i>{info.description}</i> and
                feels like {info.feelsLike}&deg;C{" "}
              </p>
            </Typography>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
