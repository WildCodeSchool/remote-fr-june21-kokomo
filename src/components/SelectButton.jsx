import React, { useRef } from "react";
import { useDetectOutsideClick } from "./useDetectOutsideClick";
import "./SelectBar.css";

const SelectButton = ({ title, handleChange, handleClick, name, values }) => {
  const showElement = useRef();
  const [showRadios, setShowRadios] = useDetectOutsideClick(showElement, false);
  const handleShowRadiosOnlyClick = () => {
    setShowRadios(!showRadios);
  };

  return (
    <div ref={showElement}>
      <button onClick={handleShowRadiosOnlyClick}>{title}</button>

      <div className='radioButtons'>
        {values
          .filter((value) => showRadios)
          .map((element, index) => (
            <div key={index}>
              <input
                type='radio'
                value={element.value}
                name={name}
                className='form-check-input'
                onChange={handleChange}
                onClick={handleClick}
              />
              <label>{element.name}</label>
            </div>
          ))}
      </div>
    </div>
  );
};

export default SelectButton;
