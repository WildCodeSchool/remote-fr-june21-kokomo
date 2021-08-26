import CocktailListFavorite from "./CocktailListFavorite";

import './FavoritesList.css';

const Favorites = ({favorites}) => {

    return (
        <div className=''>
            <h4 className='favorites-title'>Your favorites cocktails</h4>
            <CocktailListFavorite favorites={favorites} />
        </div>
 )
}
 
export default Favorites;