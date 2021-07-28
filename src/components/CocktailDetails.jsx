import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { NavLink } from "react-router-dom";
import AddButton from './AddButton.jsx';

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
        <section className="details-container">
            <div className="card-container media-details">
                <div className="cocktail-card media-details">
                    <img className="image media-details" src={cocktail.strDrinkThumb} alt="cocktail"/>
                    <div className="grand-background media-details">
                        <div className="parent-background media-details">
                            <div className="child-background media-details">
                                <h2 className="cocktail-name">{cocktail.strDrink}</h2>
                            </div>
                        </div>
                    </div>
                    <div className="ingredients">
                        <AddButton />
                        <div>
                            <ul className="basic">
                                {getIngredients(cocktail).map((ingredient, i) => (
                                <li className="ingredients-list" key={i}> {ingredient.measure.toUpperCase()} {ingredient.name} </li>
                            ))}
                            </ul>
                        </div>
                    </div>
                    <div className="recipe">
                        <p>{cocktail.strInstructions}</p>
                    </div>
                </div>
            </div>
                <div>
                    <NavLink to="/cocktails">Return to cocktails list</NavLink>
                </div>
        </section>
    )
}

export default CocktailDetails;
