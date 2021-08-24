import { useState, useEffect } from "react";
import CocktailCard from "./CocktailCard";
import Search from "./Search";

const CocktailList = () => {
  const [cocktails, setCocktails] = useState([]);
  const [favoriteAdd, setFavoriteAdd] = useState([]);

  useEffect(() => {
    fetch(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Alcoholic`)
      .then((response) => response.json())
      .then((data) => setCocktails(data.drinks));
  }, []);

    const addFavorite = (cocktails) => {
      const newFavoriteList = [...favoriteAdd, cocktails] 
      setFavoriteAdd(newFavoriteList);
      localStorage.setItem('favorite', JSON.stringify([...favoriteAdd, cocktails]))
    }

  return (
    <>
      <Search />
      <div className='list-container'>
        {cocktails.map((cocktail) => (
          <CocktailCard cocktails={cocktails} handleFavoriteClick={addFavorite} favoriteAdd={favoriteAdd} key={cocktail.idDrink} {...cocktail} />
        ))}
      </div>
    </>
  );
};

export default CocktailList;
