import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { NavLink } from "react-router-dom";
import AddButton from './AddButton.jsx';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";

import './CocktailDetails.css';

const CocktailDetails = () => {

    const [cocktail, setCocktail] = useState({});
    const { idDrink } = useParams();
    
    useEffect(() => {
        fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${idDrink}`)
        .then(response => response.json())
        .then(data => setCocktail(data.drinks[0]))
    }, [<CocktailDetails />])


    const ingredients = Object.entries(cocktail)
                .filter(ing => ing[0].includes("Ingredient"))
                .map(i => i[1])

    const measure = Object.entries(cocktail)
                .filter(mea => mea[0].includes("Measure"))
                .map(m => m[1])
    

    return (
        <section className="details-container">
            <div className="card-container media-details">
                <div className="cocktail-card media-details">
                    <div className="back">
                        <NavLink to="/cocktails"><FontAwesomeIcon className="back-icon" icon={faPaperPlane} /></NavLink>
                    </div>
                    <img className="image media-details" src={cocktail.strDrinkThumb} alt="cocktail"/>
                <div className="grand-background media-details">
                        <div className="parent-background media-details">
                            <div className="child-background media-details">
                                <h2 className="cocktail-name">{cocktail.strDrink}</h2>
                            </div>
                        </div>
                    </div>
                    <div className="parent-ingredients">
                        <AddButton oz={measure}/>
                        <div className="child-ingredients">
                            <ul className="basic">
                                {ingredients.map((a, b) => a && 
                                    <li key={idDrink} className="ingredients-list">
                                        {a} {measure[b]}
                                    </li>
                                    )}
                            </ul>
                        </div>
                    </div>
                    <div className="recipe">
                        <p>{cocktail.strInstructions}</p>
                    </div>
                </div>
            </div>
                
        </section>
    )
}

export default CocktailDetails;
