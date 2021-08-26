import { useState, useEffect } from 'react';
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';
import CocktailList from './components/CocktailList';
import CocktailDetails from './components/CocktailDetails';
import Home from './components/Home';
import Header from './components/Header';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Age from './components/Age';
import Favorites from './components/Favorites';
import './App.css';

const App = () => {

  const [favorites,setFavorites] = useState ([]);

  useEffect(() => {
        const favoritesInLS = JSON.parse(localStorage.getItem('favorite'));
        if (favoritesInLS) {
          setFavorites(favoritesInLS);
        }  
  }, []);


  useEffect (() => {
    localStorage.setItem('favorite', JSON.stringify(favorites))
  },[favorites])

  const toogleFavorite = (cocktail) => {
    if (favorites.includes(cocktail)) {
      const newFavoriteList = favorites.filter(id => id != cocktail)
      setFavorites(newFavoriteList);
    } else {
      const newFavoriteList = [...favorites, cocktail]
      setFavorites(newFavoriteList);
    }
  }


  return (
    <div className="app">
      <Age />
        <BrowserRouter>
          <Header />
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/cocktails">
              <CocktailList />
            </Route>
            <Route exact path="/cocktails/:idDrink">
              <CocktailDetails favorites={favorites} toogleFavorite={toogleFavorite} />
            </Route>
            <Route exact path="/contact">
              <Contact />
            </Route>
            <Route exact path ='/favorites'>
              <Favorites favorites={favorites} />
            </Route>
          </Switch>
          <Footer />
        </BrowserRouter>
      </div>
  );
}

export default App;
