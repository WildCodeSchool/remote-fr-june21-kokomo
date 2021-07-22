import { useState, useEffect } from "react";
import CocktailCard from "./CocktailCard";
import './CocktailList.css';

const CocktailList = () => {
const [cocktails, setCocktails] = useState([]);

useEffect(() => {
    fetch(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Alcoholic`)
    .then(response => response.json())
    .then(data => setCocktails(data.drinks))
}, []);
    
return (
    <>
      
        <h1>Cocktails List</h1>
        <div className="list-container">   
            {cocktails.map((cocktail) => (
                <CocktailCard Key={cocktail.idDrink} {...cocktail} />
            ))
            }
        </div>
    </>
)
};

export default CocktailList;


