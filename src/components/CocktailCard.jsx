import { Link } from 'react-router-dom';


import './CocktailCard.css';

const CocktailCard = ({strDrinkThumb, strDrink, idDrink, strCategory }) => {
    return (
        <div className="container">
            <Link to={`/cocktails/${idDrink}`} alt={strDrink}>
                <figure className="cocktail-card">
                <img src={strDrinkThumb} alt={`image of ${strDrink}`} />
                    <figcaption>
                        <div className="title-background">
                            <h2>{strDrink}</h2>
                        </div>
                        <p>{strCategory}</p>
                    </figcaption>
                </figure>
            </Link>
        </div>
    );
}

export default CocktailCard;