import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowCircleUp } from "@fortawesome/free-solid-svg-icons";
import { faArrowCircleDown } from "@fortawesome/free-solid-svg-icons";


const AddButton = () => {

    const [counter, setCounter] = useState(1);
    const increment = () => setCounter(counter + 1);
    let decrement = () => setCounter(counter - 1);
    if (counter <= 1) {
       decrement = () => setCounter(1); 
    } 

        return (
            <div className="add">
                <FontAwesomeIcon onClick={increment} icon={faArrowCircleUp} />
                <p>{counter} pers</p>
                <FontAwesomeIcon onClick={decrement} icon={faArrowCircleDown} />
            </div>
        )

}

export default AddButton;