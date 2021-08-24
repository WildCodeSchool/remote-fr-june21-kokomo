import React, { useState } from "react";
import "./SelectButton.css";

const SelectButton = ({ title, handleChange, values }) => {
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
                name='radioButton'
                className='form-check-input'
                onChange={handleChange}
              />
              <label>{element.name}</label>
            </div>
          ))}
      </div>
    </>
  );
};

export default SelectButton;
