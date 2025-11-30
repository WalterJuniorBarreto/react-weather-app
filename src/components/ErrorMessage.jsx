import React from "react";

function ErrorMessage({ message }){
    if(!message) return null;
    
    return(
        <div className="error-message">
            <p>Error: {message}</p>
        </div>
    );
}

export default ErrorMessage;


