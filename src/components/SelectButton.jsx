import React, { useState, useRef } from "react";
import { useDetectOutsideClick } from "./useDetectOutsideClick";
import "./SelectBar.css";

const SelectButton = ({ title, handleChange, name, values, onClick }) => {
  const showElement = useRef();
  const [showRadios, setShowRadios] = useDetectOutsideClick(showElement, false);
  const handleShowRadiosOnlyClick = () => {
    setShowRadios(!showRadios);
  };

  return (
    <div className='group-buttons' ref={showElement}>
      <button className='primary-button' onClick={handleShowRadiosOnlyClick}>
        <span>{title}</span>
      </button>

      <div className='radio-buttons'>
        {values
          .filter((value) => showRadios)
          .map((element, index) => (
            <div className='radio-element' key={index}>
              <input
                type='radio'
                value={element.value}
                name={name}
                className='radio-selection'
                onChange={handleChange}
              />
              <label>{element.name}</label>
            </div>
          ))}
      </div>
    </div>
  );
};

export default SelectButton;
