import React from "react";
import styles from './SearchBar.module.css';




function SearchBar({ value, onChange }) {

    const handleChange = (e) => {
        // Solo le informa al "padre" (el hook) sobre el nuevo texto
        onChange(e.target.value);
    };

    return (
        // 3. Ya no es un <form>, es solo el contenedor del input
        <div className={styles.searchWrapper}>
            <input 
                type="text"
                placeholder="Escribe una ciudad..."
                value={value} // 4. El valor es controlado desde afuera
                onChange={handleChange} // 5. Llama a la función del padre
                className={styles.searchInput}
            />
            {/* 6. Eliminamos el botón de "Buscar", la búsqueda es automática */}
        </div>
    );
}

export default SearchBar;



