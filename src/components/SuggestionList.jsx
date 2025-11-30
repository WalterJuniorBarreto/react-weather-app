import React from 'react';
import styles from './SuggestionList.module.css';



function SuggestionsList({ suggestions, onSelect, isSearching }) {

  if (suggestions.length === 0 && !isSearching) {
    return null;
  }


  if (isSearching) {
    return <div className={styles.searching}>Buscando...</div>;
  }

  return (
    <ul className={styles.suggestionsList}>
      {suggestions.map((city) => (
        <li
          
          key={`${city.lat}-${city.lon}`}
          className={styles.suggestionItem}
          onClick={() => onSelect(city)}
        >
          {city.name}, {city.country} 
          {city.state && ` (${city.state})`}
        </li>
      ))}
    </ul>
  );
}

export default SuggestionsList;