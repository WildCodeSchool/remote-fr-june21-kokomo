import { useState, useEffect } from "react";
import CocktailCard from "./CocktailCard";
import Search from "./Search";

const CocktailList = () => {
  const [cocktails, setCocktails] = useState([]);

  useEffect(() => {
    fetch(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Alcoholic`)
      .then((response) => response.json())
      .then((data) => setCocktails(data.drinks));
  }, []);

  return (
    <>
      <Search />
      <div className='list-container'>
        {cocktails.map((cocktail) => (
          <CocktailCard cocktails={cocktails} key={cocktail.idDrink} {...cocktail} />
        ))}
      </div>
    </>
  );
};

export default CocktailList;
