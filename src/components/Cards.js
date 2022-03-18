import React, { useContext } from "react";
import { WeatherContext } from "../context/WeatherContext";
import "../style.css";
import { Box, Flex } from "@chakra-ui/react";

const Cards = () => {
  const { weatherList } = useContext(WeatherContext);
  const getIcon = (iconId) => {
    return `http://openweathermap.org/img/wn/${iconId}@2x.png`;
  };

  const date = new Date();
  const options = { weekday: "long" };
  const currentDay = new Intl.DateTimeFormat("tr-TR", options).format(date);
  const dateFormat = new Intl.DateTimeFormat("tr-TR").format(date);
  const hours = date.toLocaleTimeString("tr-TR");
  
  return (
    <Flex justify="center">
      {weatherList.map((data, index) => (
        <Box key={index} className="card" m="3">
          <Box className="card-header">
            {currentDay} {dateFormat}
          </Box>
          <Box mt="5" textAlign="center" fontSize="16px" fontWeight="semibold">
            {hours}
          </Box>
          <Box className="card-main">
            <img
              className="weather-icon"
              src={getIcon(data.weather[0].icon)}
              alt={getIcon(data.weather[0].main)}
            />
            <Box fontSize="24px" mb="15px">
              {Math.floor(data.main.temp)}&deg;
            </Box>
            <Box className="main-description">
              {data.weather[0].description}
            </Box>
          </Box>
        </Box>
      ))}
    </Flex>
  );
};

export default Cards;
