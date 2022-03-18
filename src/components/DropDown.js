import React, { useContext} from 'react';
import {WeatherContext} from "../context/WeatherContext";
import { Box } from "@chakra-ui/react";
import "../style.css";


const cities = ["Adana", "Adıyaman", "Afyonkarahisar", "Ağrı", "Aksaray", "Amasya", "Ankara", "Antalya", "Ardahan", "Artvin", "Aydın", "Balıkesir", "Bartın", "Batman", "Bayburt", "Bilecik", "Bingöl", "Bitlis", "Bolu", "Burdur", "Bursa", "Çanakkale", "Çankırı", "Çorum", "Denizli", "Diyarbakır", "Düzce", "Edirne", "Elazığ", "Erzincan", "Erzurum", "Eskişehir", "Gaziantep", "Giresun", "Gümüşhane", "Hakkâri", "Hatay", "Iğdır", "Isparta", "İstanbul", "İzmir", "Kahramanmaraş", "Karabük", "Karaman", "Kars", "Kastamonu", "Kayseri", "Kilis", "Kırıkkale", "Kırklareli", "Kırşehir", "Kocaeli", "Konya", "Kütahya", "Malatya", "Manisa", "Mardin", "Mersin", "Muğla", "Muş", "Nevşehir", "Niğde", "Ordu", "Osmaniye", "Rize", "Sakarya", "Samsun", "Şanlıurfa", "Siirt", "Sinop", "Sivas", "Şırnak", "Tekirdağ", "Tokat", "Trabzon", "Tunceli", "Uşak", "Van", "Yalova", "Yozgat", "Zonguldak"];

const DropDown = () => {
  const data = useContext(WeatherContext);

  return (
      <Box className="select-main">
        <select 
          className="select-input"
          name="cities"
          onChange={(e) => data.setCity(e.target.value)} 
          defaultValue={"İstanbul"}
        >

          {
            cities.map((city, index) => (
              <option 
                variant='outline' 
                size='sm' 
                key={index} 
                value={city} 
              >
                {city}
              </option>
            ))
          }
        </select>
      </Box>
  
  )
}

export default DropDown;


