import React from "react";
import WeatherProvider from "./context/WeatherContext";
import DropDown from "./components/DropDown";
import Cards from "./components/Cards";

function App() {
  return (
    <WeatherProvider>
      <Cards />
      <DropDown />
    </WeatherProvider>
  );
}

export default App;
