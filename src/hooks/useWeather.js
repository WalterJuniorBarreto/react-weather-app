import { useState, useEffect, useRef } from "react";
import { getWeatherByCoords, searchCities } from "../services/weatherService";

export const useWeather = () => {
    const [weatherData, setWeatherData] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const [searchTerm, setSearchTerm] = useState('');
    const [suggestions, setSuggestions] = useState([]);
    const [isSearching, setIsSearching] = useState(false);
    const debounceTimeout = useRef(null);


    useEffect(() => {
        if (debounceTimeout.current) {
            clearTimeout(debounceTimeout.current);
        }
        if (searchTerm.trim() === '') {
            setSuggestions([]);
            setIsSearching(false);
            return; 
        }

        debounceTimeout.current = setTimeout(async () => {
        try {
            setIsSearching(true);
            setError(null);
            const cities = await searchCities(searchTerm);
            setSuggestions(cities);
        } catch (err) {
            setError(err.message); 
            setSuggestions([]); 
        } finally {
            setIsSearching(false);
        }
        }, 500);
        return () => {
            clearTimeout(debounceTimeout.current);
        };
        
    }, [searchTerm]);

    const handleSearchChange = (text) => {
        setSearchTerm(text);
    };
    const handleCitySelect = async (city) => {
        setSearchTerm('');
        setSuggestions([]);
        
        setIsLoading(true);
        setError(null);
        setWeatherData(null); 

        try {
            const data = await getWeatherByCoords(city.lat, city.lon);
            setWeatherData(data);
        } catch (err) {
            setError(err.message);
        } finally {
            setIsLoading(false);
        }
    };

    return{
        weatherData,
        isLoading,
        error,
        searchTerm,
        suggestions,
        isSearching,
        handleCitySelect,
        handleSearchChange
    };
};

