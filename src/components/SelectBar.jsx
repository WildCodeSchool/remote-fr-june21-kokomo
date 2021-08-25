import { useState, useEffect } from "react";
import SelectButton from "./SelectButton";

import "./SelectBar.css";

const SelectBar = ({ onResultChange }) => {
  const ingredientElements = [
    {
      value: "i=Vodka",
      name: "Vodka",
    },
    {
      value: "i=Rum",
      name: "Rum",
    },
    {
      value: "i=Scotch",
      name: "Scotch",
    },
  ];
  const categoryElements = [
    {
      value: "c=Shot",
      name: "Shot",
    },
    {
      value: "c=Cocktail",
      name: "Cocktail",
    },
    {
      value: "c=Soft Drink / Soda",
      name: "Soft Drink / Soda",
    },
  ];
  const alcoholicElements = [
    {
      value: "a=Alcoholic",
      name: "Alcoholic",
    },
    {
      value: "a=Non_Alcoholic",
      name: "Non Alcoholic",
    },
  ];

  const [selectedValue, setSelectedValue] = useState("");

  const handleChange = (e) => {
    setSelectedValue(e.target.value);
  };

  useEffect(() => {
    //doit stocker fetch dans une const
    const recupData = () => {
      fetch(
        `https://www.thecocktaildb.com/api/json/v1/1/filter.php?${selectedValue}`
      )
        .then((response) => response.json())
        .then((data) => {
          onResultChange(data.drinks);
        });
    };
    recupData();
  }, [selectedValue]);

  return (
    <div className='container-full-height'>
      <div className='buttons-container'>
        <SelectButton
          title='Ingredient'
          name='ingredientButton'
          selectedValue={selectedValue}
          values={ingredientElements}
          handleChange={handleChange}
        />
        <SelectButton
          title='Category'
          name='categoryButton'
          selectedValue={selectedValue}
          values={categoryElements}
          handleChange={handleChange}
        />
        <SelectButton
          title='Alcoholic'
          name='alcoholicButton'
          selectedValue={selectedValue}
          values={alcoholicElements}
          handleChange={handleChange}
        />
      </div>
    </div>
  );
};

export default SelectBar;
