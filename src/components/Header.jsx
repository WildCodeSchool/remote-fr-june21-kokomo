import { BrowserRouter, Link, NavLink, Route, Switch } from 'react-router-dom';

import NavBar from './NavBar';
import Search from './Search';

import './Header.css';

const Header = () => {
    return (
       <div className="top-header">
           <div className="h-title">
                <NavLink className="linkKokomo" to='/cocktails'><h3>Kokomo</h3></NavLink>
           </div>
           <div className="search">
                <Search />
           </div>
           <div>
                <NavBar />
           </div>
       </div> 
    )
}

export default Header;
