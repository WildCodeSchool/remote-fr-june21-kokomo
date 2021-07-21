import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';
import CocktailList from './components/CocktailList';
import CocktailDetails from './components/CocktailDetails';
import Home from './components/Home';


import './App.css';

const App = () => {
  return (
    <div class="app">
      <BrowserRouter>
     
    

      <Switch>
        <Route exact path="/"> 
          <Home />
        </Route>
        <Route path="/cocktails">
         <CocktailList />
        </Route>
        <Route path="/cocktails/:id">
          <CocktailDetails/>
        </Route>


      </Switch>
      
      
      </BrowserRouter>
      
    
    </div>
  );
}

export default App;
