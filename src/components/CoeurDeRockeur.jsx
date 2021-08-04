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

    const [state, setState] = useState({
        open: false,
        fav: false,
        Transition: Slide
    });
    
    const handleClick = (Transition) => () => {
        setState({
            open: true,
            fav : !state.fav,
            Transition
        });
    };

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
          }
        setState({
            ...state,
            open: false,
        })
    
    };


    return (
        <div className="heart-icon">
            <Snackbar open={state.open} autoHideDuration={5000} onClose={handleClose} TransitionComponent={state.Transition}>
                {state.fav ? <Alert onClose={handleClose} severity="success">You successfuly added {props.name} to your favorites !</Alert> : 
                <Alert onClose={handleClose} severity="info">{props.name} is no longer one of your favorite cocktail</Alert>}
            </Snackbar>
            <FontAwesomeIcon className={state.fav ? "heart-icon fav" : "heart-icon"} onClick={handleClick(SlideTransition)} icon={ faHeart } size={props.desktop ? "1x" : "3x"} />
        </div>
    )
}

export default CoeurDeRockeur;