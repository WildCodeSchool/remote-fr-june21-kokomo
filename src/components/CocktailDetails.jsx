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
    }, [<CocktailDetails />])


    const getIngredients = (cocktail) => {
        var ingredients = [];
        const ingredientsName = Object.entries(cocktail)
            .filter(ing => ing[0].includes("Ingredient") && ing[1] !== null)
            .map(i => i[1])

        const measure = Object.entries(cocktail)
            .filter(mea => mea[0].includes("Measure") && mea[1] !== null)
            .map(m => m[1])

        ingredientsName.forEach((name, i) => ingredients.push({
            name: name,
            measure: measure[i]
        }));

        return ingredients;
    }

    return (
        <div className="details-container">
            <img src={cocktail.strDrinkThumb} alt="cocktail"/>
            <h1 className="cocktail-name">{cocktail.strDrink}</h1>
            <ul className="ingredients">
                {getIngredients(cocktail).map((ingredient, i) => (
                    <li key={i}>{ingredient.name} :{ingredient.measure} </li>
                ))}
            </ul>
            <p className="recipe"></p>
            <NavLink to="/cocktails">Return to cocktails list</NavLink>
        </div> 
    )
}

export default CocktailDetails;
