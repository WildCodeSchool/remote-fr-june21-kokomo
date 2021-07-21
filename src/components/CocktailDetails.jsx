import React from "react";
import AddButton from "./AddButton";
import { useEffect, useState } from "react";
import { useParams } from "react-router";

const CocktailDetails = () => {
    const [cocktailDetails, setCocktailDetails] = useState(null);
    const { idDrink } = useParams();

    useEffect(() => {
        fetch('https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i={idDrink}')
        .then(response => response.json())
        .then(data => setCocktailDetails(data[0]))
    })
    return (
        <div>
            <img src={cocktailDetails.strDrinkThumb} alt="cocktail"/>
            <h1 className="cocktailName">{cocktailDetails.strDrink}</h1>
            <AddButton />
            <ul className="ingredients">
            
            </ul>
            <p className="recipe"></p>
        </div>
    )

}

export default CocktailDetails;


// const ingredient = () => {
//     const getIngredients = Object.keys(cocktail)
//     .filter(function (keyObject) {
//         return keyObject.includes("strIngredient");
//     })
//     .reduce(function (ingredients, keyObject) {
//         if (cocktail[keyObject] != null) {
//         //  ingredients[keyObject] = cocktail[keyObject];
//         ingredients[keyObject] = {ingredient:cocktail[keyObject], measure:cocktail[keyObject.replace('strIngredient', 'strMeasure')]};
//         }
//         return ingredients;
//     }, {});

// // for (let key in getIngredients) {
// //   let value = getIngredients[key];
//     return (
        
//         <CocktailCard  ingredients={this.getIngredients}/>

//     )
// }