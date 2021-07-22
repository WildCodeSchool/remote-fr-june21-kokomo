import { NavLink } from 'react-router-dom';
import CocktailList from './CocktailList'; 
import pattern from '../assets/pattern.jpg';

import './CocktailCard.css';

const CocktailCard = ({strDrinkThumb, strDrink, idDrink }) => {
    return (
        <div className="card-container">
            <figure className="cocktail-card">
                <NavLink className="navlink" to={`/cocktails/${idDrink}`} alt={strDrink}>
                    <img src={strDrinkThumb} alt={`image of ${strDrink}`} />
                </NavLink>
                <figcaption>
                    <div className="title-background">
                        <h2>{strDrink}</h2>
                    </div>
                </figcaption>
            </figure> 
        </div>
    );
}

export default CocktailCard;


