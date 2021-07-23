import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { NavLink } from "react-router-dom";

import './CocktailDetails.css';

const CocktailDetails = () => {

    const [cocktail, setCocktail] = useState({});
    const { idDrink } = useParams();
    
    useEffect(() => {
        fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${idDrink}`)
        .then(response => response.json())
        .then(data => setCocktail(data.drinks[0]))
    }, [])
        
    const ingredients = Object.entries(cocktail)
                .filter(ing => ing[0].includes("Ingredient"))
                .map(i => i[1])
    const measure = Object.entries(cocktail)
                .filter(mea => mea[0].includes("Measure"))
                .map(m => m[1])
    
    return (
        <div>
            <div className="details-container">
                <img src={cocktail.strDrinkThumb} alt="cocktail"/>
                <div>
                    <h2 >{cocktail.strDrink}</h2>
                </div>
                <div className="white-container">
                    <ul className="ingredients">
                        {ingredients.map((a, b) => a && 
                        <li className="ingredients-list">
                            {a} {measure[b]}
                        </li>
                        )}
                    </ul>
                </div>
                <div className="green-container">
                    <h3 className="recipe">recipe</h3> 
                    <p>{cocktail.strInstructions}</p>
                </div>
                <NavLink to="/cocktails">Return to cocktails list</NavLink>  
            </div> 
        </div>
    )
}

export default CocktailDetails;
