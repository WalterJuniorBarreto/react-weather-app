import React from 'react';
import { useWeather } from './hooks/useWeather';
import SearchBar from './components/SearchBar';
import SuggestionsList from './components/SuggestionList';
import WeatherDisplay from './components/WeatherDisplay';
import LoadingSpinner from './components/LoadingSpinner';
import ErrorMessage from './components/ErrorMessage';
import styles from './App.module.css';



function App() {

  const { weatherData, isLoading, error, searchTerm, suggestions, isSearching, handleCitySelect, handleSearchChange } = useWeather();


  return (
    <div className={styles.appContainer}>
      <h1>Mi app del clima</h1>
      <SearchBar 
        value={searchTerm} 
        onChange={handleSearchChange} 
      />
      <SuggestionsList
        suggestions={suggestions}
        isSearching={isSearching}
        onSelect={handleCitySelect}
      />
      { isLoading && <LoadingSpinner /> }
      { error && <ErrorMessage message={error} /> }
      { weatherData && !isLoading && <WeatherDisplay data={weatherData} /> }
    </div>
  )
}

export default App;