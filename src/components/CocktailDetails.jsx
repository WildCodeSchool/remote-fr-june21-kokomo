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
        <div className="card-container">
            <div className="cocktail-card">
                <img src={cocktail.strDrinkThumb} alt="cocktail"/>
                <div className="grand-background">
                    <div className="parent-background">
                        <div className="child-background">
                            <h2 className="cocktail-name">{cocktail.strDrink}</h2>
                        </div>
                    </div>
                </div>
                <div className="ingredients">
                    <ul className="basic">
                        {getIngredients(cocktail).map((ingredient, i) => (
                        <li className="ingredients-list" key={i}> {ingredient.measure.toUpperCase()} {ingredient.name} </li>
                        ))}
                    </ul>
                </div>
                <p className="recipe">{cocktail.strInstructions}</p>
                
            </div>
            <NavLink to="/cocktails">Return to cocktails list</NavLink>
        </div> 
    )
}

export default CocktailDetails;
