import CocktailCard from "./CocktailCard";
import Favorites from "./Favorites";

import './FavoritesList.css'

const CocktailListFavorite = ({favorites}) => {
    return ( 
        <div className='favorites-maindiv'>
            {favorites && favorites
                .map(user => <CocktailCard {...user} /> )}
        </div>
    )
}
 
export default CocktailListFavorite;