import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';
import CocktailList from './components/CocktailList';
import CocktailDetails from './components/CocktailDetails';
import Home from './components/Home';
import Header from "./components/Header";

import './App.css';

const App = () => {
  return (
    <div className="app">
      <BrowserRouter>
        <Switch>
          <Route exact path="/"> 
            <Home />
          </Route>
          <Route exact path="/cocktails">
            <Header />
            <CocktailList />
          </Route>
          <Route exact path="/cocktails/:idDrink">
            <Header />
            <CocktailDetails/>
          </Route>
          <Route path="/search/:strDrink">
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}
export default App;