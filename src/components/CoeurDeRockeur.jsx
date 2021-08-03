import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from "@fortawesome/free-solid-svg-icons";

const CoeurDeRockeur = (props) => {

    const [fav, setFav] = useState(false);
    const favorite = () => setFav(!fav);

    return (
        <div className="heart-icon">
            <FontAwesomeIcon className={fav ? "heart-icon fav" : "heart-icon"} onClick={favorite} icon={ faHeart } size={props.desktop ? "1x" : "3x"} />
        </div>
    )
}

export default CoeurDeRockeur;