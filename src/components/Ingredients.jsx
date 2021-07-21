const Ingredients = () => {
    const getIngredients = Object.keys(cocktail)
    .filter(function (keyObject) {
        return keyObject.includes("strIngredient");
    })
    .reduce(function (ingredients, keyObject) {
        if (cocktail[keyObject] != null) {
        //  ingredients[keyObject] = cocktail[keyObject];
        ingredients[keyObject] = {ingredient:cocktail[keyObject], measure:cocktail[keyObject.replace('strIngredient', 'strMeasure')]};
        }
        return ingredients;
    }, {});

// for (let key in getIngredients) {
//   let value = getIngredients[key];
    return ( 
        <CocktailCard  ingredients={this.getIngredients}/>
    )
}

export default Ingredients;