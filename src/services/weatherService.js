const API_KEY = import.meta.env.VITE_OPENWEATHER_API_KEY;
const WEATHER_API_URL = 'https://api.openweathermap.org/data/2.5/weather';
const GEO_API_URL = 'https://api.openweathermap.org/geo/1.0/direct';


const mapApiDataToWeather = (data) => {
    const { main, weather, name} = data;

    return {
        city: name,
        temp: Math.round(main.temp),
        tempMin: Math.round(main.temp_min),
        tempMax: Math.round(main.temp_max),
        humidity: main.humidity,
        description: weather[0].description,
        icon: weather[0].icon, 
    };


}



export const getWeatherByCity = async (city) =>{
    const API_URL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric&lang=es`;

    const response = await fetch(API_URL);

    if(!response.ok){
        const errorData = await response.json();
        throw new Error(errorData.message || "Error al buscar el clima");
    }

    const data = await response.json();

    const mappedData = mapApiDataToWeather(data);
    return mappedData;
};



const mapApiDataToCity = (apiData) => {
  return {
    name: apiData.name,
    country: apiData.country,
    state: apiData.state, 
    lat: apiData.lat,
    lon: apiData.lon,
  };
};

export const getWeatherByCoords = async (lat, lon) => {
  
  const url = `${WEATHER_API_URL}?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric&lang=es`;
  
  const response = await fetch(url);

  if (!response.ok) {
    const errorData = await response.json(); 
    throw new Error(errorData.message || 'Error al buscar el clima');
  }

  const data = await response.json();
  
  const mappedData = mapApiDataToWeather(data);
  return mappedData;
};

export const searchCities = async (query) => {
    const url = `${GEO_API_URL}?q=${query}&limit=5&appid=${API_KEY}`;
    const response = await fetch(url);
    if (!response.ok) {
        throw new Error('Error al buscar ciudades');
    }
    const data = await response.json();
    const mappedData = data.map(mapApiDataToCity);
  
    return mappedData;
}


