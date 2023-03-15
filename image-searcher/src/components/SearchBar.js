import { useState } from "react";
import "./SearchBar.css"

function SearchBar ({ onSubmit }){
    const [term, setTerm] = useState("");

    const handleFormSubmit = (event) =>{
        event.preventDefault();
        onSubmit(term);
    };
    
    const handleChange = (event) =>{
        setTerm(event.target.value);
    };
    
    return (
        <div className="search-bar">
            <form onChange={handleChange} onSubmit={handleFormSubmit}>
                <label>What do you wanna search?</label>
                <input value={term}/>
                <button>buscar</button>
            </form>
        </div>
    );
};

export default SearchBar;