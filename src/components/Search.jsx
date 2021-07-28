import { useState, useEffect } from "react";
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';

const Search = () => {
    const [searchValue, setSearchValue] =  useState('');
    const [name, setName] = useState([]);
    
    useEffect(() => {
        fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${searchValue}`)
        .then(response => response.json())
        .then(data => setName(data.drinks))
    }, [searchValue]);
    
    const handleChange = (event) => {
        setSearchValue(event.target.value);
    };

    return (
        <>     
          
            <input
                value={searchValue}
                onChange={handleChange}
                type="text"
                placeholder="Search for a cocktail ?"
                id ="input-search"
                />
            <div className="result">
            <ul>
                {(searchValue && name) &&
                name.map ((elem) => (
                    <li key={elem.idDrink}><Link to={`/cocktails/${elem.idDrink}`}>{elem.strDrink}</Link></li>
                    ))}
            
            </ul>
            </div>
                  
        
            
       
          

        </>
    )
}

export default Search;
