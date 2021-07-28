import React, { useRef } from "react";
import { useDetectOutsideClick } from "./useDetectOutsideClick";
import "./SelectBar.css";
/*
 * Read the blog post here:
 * https://letsbuildui.dev/articles/building-a-dropdown-menu-component-with-react-hooks
 */

const SelectBar = () => {
  const dropdownRef = useRef(null);
  const [isActive, setIsActive] = useDetectOutsideClick(dropdownRef, false);
  const onClick = () => setIsActive(!isActive);

  const [activeRadio, setActiveRadio] = React.useState(false);
  function handleChange() {
    setActiveRadio(!activeRadio);
  }

  return (
    <>
      <div className='container'>
        <div className='menu-container'>
          <nav className='primary-nav'>
            <ul>
              <li onClick={onClick} className='menu-trigger'>
                Alcool
              </li>
              <li onClick={onClick} className='menu-trigger'>
                Ingredient
              </li>
              <li onClick={onClick} className='menu-trigger'>
                Category
              </li>
            </ul>
          </nav>
          <nav
            ref={dropdownRef}
            className={`menu ${isActive ? "active" : "inactive"}`}
          >
            <form className='alcool-select'>
              <input
                type='radio'
                value='Amaretto'
                id='a-Amaretto'
                name='alcool'
                onChange={handleChange}
                className='form-check-input'
              />
              <label>Amaretto</label>
              <input
                type='radio'
                value='Gin'
                id='a-Gin'
                name='alcool'
                onChange={handleChange}
                className='form-check-input'
              />
              <label>Gin</label>
              <input
                type='radio'
                value='Rum'
                id='a-Rum'
                name='alcool'
                onChange={handleChange}
                className='form-check-input'
              />
              <label>Rum</label>
              <input
                type='radio'
                value='Vermouth'
                id='a-Vermouth'
                name='alcool'
                onChange={handleChange}
                className='form-check-input'
              />
              Vermouth
              <label>Vermouth</label>
              <input
                type='radio'
                value='Vodka'
                id='a=Vodka'
                name='alcool'
                onChange={handleChange}
                className='form-check-input'
              />
              <label>Vodka</label>
            </form>

            <form className='ingredient-select'>
              <input
                type='radio'
                value='Bitters'
                id='i=Bitters'
                name='ingredient'
                onChange={handleChange}
                className='form-check-input'
              />
              <label>Bitters</label>
              <input
                type='radio'
                value='Honey'
                id='i=Honey'
                name='ingredient'
                onChange={handleChange}
                className='form-check-input'
              />
              <label>Honey</label>
              <input
                type='radio'
                value='Lemon'
                id='i=Lemon'
                name='ingredient'
                onChange={handleChange}
                className='form-check-input'
              />
              <label>Lemon</label>
              <input
                type='radio'
                value='Lime'
                id='i=Lime'
                name='ingredient'
                onChange={handleChange}
                className='form-check-input'
              />
              <label>Lime</label>
              <input
                type='radio'
                value='Milk'
                id='i=Milk'
                name='ingredient'
                onChange={handleChange}
                className='form-check-input'
              />
              <label>Milk</label>
            </form>

            <form className='category-select'>
              <input
                type='radio'
                value='Ordinary Drink'
                id='c=Ordinary_Drink'
                name='category'
                onChange={handleChange}
                className='form-check-input'
              />
              <label>Ordinary Drink</label>
              <input
                type='radio'
                value='Cocktail'
                id='c=Cocktail'
                name='category'
                onChange={handleChange}
                className='form-check-input'
              />
              <label>Cocktail</label>
              <input
                type='radio'
                value='Shot'
                id='c=Shot'
                name='category'
                onChange={handleChange}
                className='form-check-input'
              />
              <label>Shot</label>
              <input
                type='radio'
                value='Homemade Liqueur'
                id='c=Homemade_Liqueur'
                name='category'
                onChange={handleChange}
                className='form-check-input'
              />
              <label>Homemade Liqueur</label>
            </form>
          </nav>
        </div>
      </div>
    </>
  );
};

export default SelectBar;
