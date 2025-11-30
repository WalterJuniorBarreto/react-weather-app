import React from "react";
import styles from './WeatherDisplay.module.css';

function WeatherDisplay({ data }){
    const { city, temp, description, icon, tempMin, tempMax, humidity } = data;

    const iconUrl = `https://openweathermap.org/img/wn/${icon}@2x.png`;

    return(
        <div className={styles.weatherCard}>
            <h2>Clima en {city}</h2>

            <div className={styles.weatherMain}>
                <img src={iconUrl} alt={description} />
                <span className={styles.temperature}>{temp}`C</span>
            </div>

            <p className={styles.description}>{description}</p>

            <div className={styles.weatherDetails}>
                <span>Min: {tempMin}`C</span>
                <span>Max: {tempMax}`C</span>
                <span>Humedad: {humidity}%</span>
            </div>
        </div>
    );
}

export default WeatherDisplay;
