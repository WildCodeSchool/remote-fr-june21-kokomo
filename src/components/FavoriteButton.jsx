import { useState } from "react";

const FavoriteButton = () => {

    const [isFavorite, setIsFavorite] = useState(false);

    return (  
        <div>
            <button className='' onClick ={() => setIsFavorite(!isFavorite)}>{ isFavorite ? 'Add to favorite' : 'Add' }</button>
        </div>
    )
}
 
export default FavoriteButton;