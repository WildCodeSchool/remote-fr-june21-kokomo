import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router";

import './CocktailDetails.css';

const CocktailDetails = () => {
    const [cocktail, setCocktail] = useState([]);
    const { idDrink } = useParams();
    
    useEffect(() => {
        fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${idDrink}`)
        .then(response => response.json())
        .then(data => setCocktail(data.drinks[0]))
    }, [])
    
    return (
        <div>
            <img src={cocktail.strDrinkThumb} alt="cocktail"/>
            <h1 className="cocktail-name">{cocktail.strDrink}</h1>
            <ul className="ingredients">
                <li>ingredient 1</li>
            </ul>
            <p className="recipe"></p>
        </div> 
    )
}

export default CocktailDetails;