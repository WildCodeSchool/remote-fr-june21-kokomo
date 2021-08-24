import { useState, useEffect } from "react";
import Header from "./Header";
import Footer from "./Footer";
import CocktailListFavorite from "./CocktailListFavorite";



const Favorites = () => {
    const [favorite,setFavorite] = useState ([]);
   

useEffect(() => {
    const getFavorite = () => {
        const storeFavorite = JSON.parse(localStorage.getItem('favorite'))
        setFavorite(storeFavorite);
    }
    getFavorite()
}, [])

    return (
        <div>
            <CocktailListFavorite favorite={favorite} />
        </div>
 )
}
 
export default Favorites;