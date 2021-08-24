import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';
import CocktailList from './components/CocktailList';
import CocktailDetails from './components/CocktailDetails';
import Home from './components/Home';
import Header from './components/Header';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Age from './components/Age';

import './App.css';

const App = () => {
  return (
    <div className="app">
      {/* <Age /> */}
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
            <Route exact path="/contact">
              <Contact />
            </Route>
          </Switch>
          <Footer />
        </BrowserRouter>
      </div>
  );
}

export default App;
