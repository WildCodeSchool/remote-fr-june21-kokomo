import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { NavLink } from "react-router-dom";

import './CocktailDetails.css';

const CocktailDetails = () => {

    const [cocktail, setCocktail] = useState([]);
    const { idDrink } = useParams();
    
    useEffect(() => {
        fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${idDrink}`)
        .then(response => response.json())
        .then(data => setCocktail(data.drinks[0]))
    }, [])
        
    const ingredients = Object.entries(cocktail)
                .filter(coc => coc[0].includes("Ingredient"))
                .map(c => c[1])
    console.log(ingredients);

    return (
        <div className="details-container">
            <img src={cocktail.strDrinkThumb} alt="cocktail"/>
            <h1 className="cocktail-name">{cocktail.strDrink}</h1>
            <ul className="ingredients">
                {ingredients.map(a => <li>{a}</li>)
                
            }
               
            </ul>
            <p className="recipe"></p>
            <NavLink to="/cocktails">Return to cocktails list</NavLink>
        </div> 
    )
}

export default CocktailDetails;



