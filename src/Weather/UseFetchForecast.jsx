import { useState, useEffect } from "react";

const useFetchForecast = () => {
  const [forecastDays, setForecastDays] = useState([]);
  const [loading, setLoading] = useState(true);
  const API_URL = "http://127.0.0.1:5000"; // Change this if deployed

  useEffect(() => {
    const fetchForecast = async () => {
      try {
        const response = await fetch(API_URL);
        const data = await response.json();
        setForecastDays(data.forecast);
      } catch (error) {
        console.error("Error fetching forecast data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchForecast();
  }, []);

  return { forecastDays, loading };
};

export default useFetchForecast;
