import React, { useState } from "react";
import "./SelectBar.css";

const SelectButton = ({ title, handleChange, handleClick, name, values }) => {
  const [showRadios, setShowRadios] = useState(false);
  const handleShowRadiosOnlyClick = () => {
    setShowRadios(!showRadios);
  };

  return (
    <>
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
    </>
  );
};

export default SelectButton;
