import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";

const Search = () => {
  const [searchValue, setSearchValue] = useState("");
  const [name, setName] = useState([]);

  useEffect(() => {
    fetch(
      `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${searchValue}`
    )
      .then((response) => response.json())
      .then((data) => setName(data.drinks));
  }, [searchValue]);

  const handleChange = (event) => {
    setSearchValue(event.target.value);
  };

  const resetInput = () => {
    setSearchValue("");
  };

  return (
    <>
      <input
        value={searchValue}
        onChange={handleChange}
        type='text'
        placeholder='Search for a cocktail ?'
        id='inputSearch'
      />
      <div className='result'>
        <ul>
          {searchValue &&
            name &&
            name.map((elem) => (
              <li key={elem.idDrink}>
                <NavLink
                  onClick={resetInput}
                  className='suggest'
                  to={`/cocktails/${elem.idDrink}`}
                >
                  {elem.strDrink}
                </NavLink>
              </li>
            ))}
        </ul>
      </div>
    </>
  );
};

export default Search;
