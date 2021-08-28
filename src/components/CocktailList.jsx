import { useMediaQuery } from "react-responsive";
import CocktailCard from "./CocktailCard";
import SelectBar from "./SelectBar";
import Search from "./Search";

const CocktailList = ({ cocktails, handleChange, sentence }) => {
  const isDesktop = useMediaQuery({
    query: "(min-width: 688px)",
  });

  return (
    <>
      <div>{isDesktop && <SelectBar onResultChange={handleChange} />}</div>
      <Search />
      <div className='list-container'>
        <h3 className='sentence'>{sentence}</h3>
        {cocktails.map((cocktail) => (
          <CocktailCard
            cocktails={cocktails}
            key={cocktail.idDrink}
            {...cocktail}
          />
        ))}
      </div>
    </>
  );
};

export default CocktailList;
