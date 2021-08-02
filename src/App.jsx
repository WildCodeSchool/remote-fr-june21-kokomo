import { BrowserRouter, Route, Switch } from "react-router-dom";
import CocktailList from "./components/CocktailList";
import CocktailDetails from "./components/CocktailDetails";
import Home from "./components/Home";
import Header from "./components/Header";
import Search from "./components/Search";
import Contact from "./components/Contact";

import "./App.css";

const App = () => {
  return (
    <div className='app'>
      <BrowserRouter>
        <Header />
        <Search />
        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route exact path='/cocktails'>
            <CocktailList />
          </Route>
          <Route exact path='/cocktails/:idDrink'>
            <CocktailDetails />
          </Route>
          <Route exact path='/contact'>
            <Contact />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default App;
