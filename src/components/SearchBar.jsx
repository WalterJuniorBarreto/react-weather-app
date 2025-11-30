import React from "react";
import styles from './SearchBar.module.css';




function SearchBar({ value, onChange }) {

    const handleChange = (e) => {
        // Solo le informa al "padre" (el hook) sobre el nuevo texto
        onChange(e.target.value);
    };

    return (
        <div className={styles.searchWrapper}>
            <input 
                type="text"
                placeholder="Escribe una ciudad..."
                value={value} 
                onChange={handleChange} 
                className={styles.searchInput}
            />
        </div>
    );
}

export default SearchBar;



