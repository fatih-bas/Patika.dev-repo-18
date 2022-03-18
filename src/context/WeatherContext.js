import { createContext, useState, useEffect } from "react";
import axios from "axios";

export const WeatherContext = createContext();
const key = "13da9fbf0b2a3b19608e10fccaa6a75a";

const WeatherProvider = ({ children }) => {
  const [weatherList, setWeatherList] = useState([]);
  const [city, setCity] = useState("İstanbul");
  const values = { city, setCity, weatherList };

  useEffect(() => {
    const getData = () => {
      axios
        .get(
          `https://api.openweathermap.org/data/2.5/forecast?q=${city}&lang=tr&units=metric&cnt=1&appid=${key}`
        ).then((response) => setWeatherList(response.data.list));
    };

    getData();
  }, [city]);
  return (
    <WeatherContext.Provider value={values}>{children}</WeatherContext.Provider>
  );
};

export default WeatherProvider;
