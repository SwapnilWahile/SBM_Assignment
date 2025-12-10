import React, { useEffect, useState } from "react";

export default function Weather() {
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchWeather = async () => {
    try {
      const res = await fetch(
        "https://api.open-meteo.com/v1/forecast?latitude=19.07&longitude=72.87&current_weather=true"
      );
      const data = await res.json();
      setWeather(data.current_weather);
      setLoading(false);
    } catch (error) {
      console.error("Weather API error:", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchWeather();
  }, []);

  return (
    <div className="item-card" style={{ textAlign: "center" }}>
      <h2>Today's Weather</h2>

      {loading && <p>Loading weather...</p>}

      {!loading && weather && (
        <div>
          <p><b>Temperature:</b> {weather.temperature}°C</p>
          <p><b>Windspeed:</b> {weather.windspeed} km/h</p>
        </div>
      )}

      {!loading && !weather && (
        <p style={{ color: "red" }}>Failed to load weather data.</p>
      )}
    </div>
  );
}
