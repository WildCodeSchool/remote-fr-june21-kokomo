import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowCircleUp } from "@fortawesome/free-solid-svg-icons";
import { faArrowCircleDown } from "@fortawesome/free-solid-svg-icons";

const AddButton = (oz) => {

    const [counter, setCounter] = useState(1);
    function increment() {
        setCounter(counter + 1);
        oz.oz.forEach(e => e ? (e * 2) : null)
        console.log(oz)
    } 
    let decrement = () => setCounter(counter - 1);
    if (counter <= 1) {
       decrement = () => setCounter(1); 
    } 

        return (
            <div className="add">
                <FontAwesomeIcon className="arrow" onClick={increment} icon={faArrowCircleUp} />
                <p>{counter}p</p>
                <FontAwesomeIcon className="arrow" onClick={decrement} icon={faArrowCircleDown} />
            </div>
        )

}

export default AddButton;