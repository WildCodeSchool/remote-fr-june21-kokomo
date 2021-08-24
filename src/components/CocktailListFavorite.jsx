import CocktailCard from "./CocktailCard";
import Favorites from "./Favorites";

const CocktailListFavorite = ({favorite}) => {
    return ( 
        <div>
            {favorite && favorite
                .map(user => <CocktailCard {...user} /> )}
        </div>
    )
}
 
export default CocktailListFavorite;