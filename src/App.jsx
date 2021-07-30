import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';
import CocktailList from './components/CocktailList';
import CocktailDetails from './components/CocktailDetails';
import Home from './components/Home';
import Header from './components/Header';

import './App.css';

const App = () => {
  return (
    <div className="app">
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
            <CocktailDetails />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
