import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { Alert } from '@material-ui/lab';
import { Snackbar } from '@material-ui/core';
import { Slide } from '@material-ui/core';

function SlideTransition(props) {
        return <Slide {...props} direction="up" />;
      }

const CoeurDeRockeur = (props) => {

    const [fav, setFav] = useState (false);
    const [state, setState] = useState({
        open: false,
        Transition: Slide
    });
    
    

    const handleClick = (Transition) => () => {
        setState({
            open: true,
            Transition
        });
        setFav(!fav)
    };

    const handleClose = () => {
        setState({
            ...state,
            open: false,
        })
    
    };


    return (
        <div className="heart-icon">
            <Snackbar open={state.open} autoHideDuration={5000} onClose={handleClose} TransitionComponent={state.Transition}>
                {fav ? <Alert onClose={handleClose} severity="success">You successfuly added {props.name} to your favorites !</Alert> : 
                <Alert onClose={handleClose} severity="info">{props.name} is no longer one of your favorite cocktail</Alert>}
            </Snackbar>
            <FontAwesomeIcon className={fav ? "heart-icon fav" : "heart-icon"} onClick={handleClick(SlideTransition)} icon={ faHeart } size={props.desktop ? "1x" : "3x"} />
        </div>
    )
}

export default CoeurDeRockeur;