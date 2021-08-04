import { useState, useEffect } from "react";
import CocktailCard from "./CocktailCard";
import SelectBar from "./SelectBar";
import Search from "./Search";

const CocktailList = () => {
  const [cocktails, setCocktails] = useState([]);
  // const [filterCocktail, setFilterCocktail] = useState([]);

  function handleChange(result) {
    setCocktails(result);
  }

  useEffect(() => {
    fetch(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Alcoholic`)
      .then((response) => response.json())
      .then((data) => setCocktails(data.drinks));
  }, []);

  return (
    <>
      <div>
        <SelectBar onResultChange={handleChange} />
      </div>
      <Search />
      <div className='list-container'>
        {cocktails.map((cocktail) => (
          <CocktailCard key={cocktail.idDrink} {...cocktail} />
        ))}
      </div>
    </>
  );
};

export default CocktailList;
