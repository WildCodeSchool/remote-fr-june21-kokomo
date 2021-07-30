import { NavLink } from 'react-router-dom';
import CocktailList from './CocktailList';
import pattern from '../assets/pattern.jpg';

import './CocktailCard.css';

const CocktailCard = ({ strDrinkThumb, strDrink, idDrink }) => {
    return (
        <div className="card-container media-card">
            <figure className="cocktail-card media-card">
                <NavLink className="navlink" to={`/cocktails/${idDrink}`} alt={strDrink}>
                    <img className="image" src={strDrinkThumb} alt={`image of ${strDrink}`} />
                </NavLink>
                <figcaption className="grand-background media-card">
                    <div className="parent-background media-card">
                        <div className="child-background media-card">
                            <h2 className="name">{strDrink}</h2>
                        </div>
                    </div>
                </figcaption>
            </figure>
        </div>
    );
}

export default CocktailCard;
