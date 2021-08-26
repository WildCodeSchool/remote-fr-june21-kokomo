import { BrowserRouter, Route, Switch } from "react-router-dom";
import { useState, useEffect } from "react";
import CocktailList from "./components/CocktailList";
import CocktailDetails from "./components/CocktailDetails";
import Header from "./components/Header";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Age from "./components/Age";

import "./components/Home.css";
import "./App.css";

const App = () => {
  const [cocktails, setCocktails] = useState([]);

  useEffect(() => {
    fetch(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Alcoholic`)
      .then((response) => response.json())
      .then((data) => setCocktails(data.drinks));
  }, []);

  const onSearchByCriteria = (selectedValue) => {
    fetch(
      `https://www.thecocktaildb.com/api/json/v1/1/filter.php?${selectedValue}`
    )
      .then((response) => response.json())
      .then((data) => {
        setCocktails(data.drinks);
      });
  };

  return (
    <div className='app'>
      <Age />
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path='/'>
            <CocktailList
              cocktails={cocktails}
              handleChange={onSearchByCriteria}
            />
          </Route>
          <Route exact path='/cocktails'>
            <CocktailList
              cocktails={cocktails}
              handleChange={onSearchByCriteria}
            />
          </Route>
          <Route exact path='/cocktails/:idDrink'>
            <CocktailDetails />
          </Route>
          <Route exact path='/contact'>
            <Contact />
          </Route>
        </Switch>
        <Footer handleChange={onSearchByCriteria} />
      </BrowserRouter>
    </div>
  );
};

export default App;
