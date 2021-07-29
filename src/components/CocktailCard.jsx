import { NavLink } from "react-router-dom";

import "./CocktailCard.css";

const CocktailCard = ({ strDrinkThumb, strDrink, idDrink }) => {
  return (
    <div className='card-container'>
      <figure className='cocktail-card'>
        <NavLink
          className='navlink'
          to={`/cocktails/${idDrink}`}
          alt={strDrink}
        >
          <img src={strDrinkThumb} alt={`image of ${strDrink}`} />
        </NavLink>
        <figcaption className='grand-background'>
          <div className='parent-background'>
            <div className='child-background'>
              <h2>{strDrink}</h2>
            </div>
          </div>
        </figcaption>
      </figure>
    </div>
  );
};

export default CocktailCard;
