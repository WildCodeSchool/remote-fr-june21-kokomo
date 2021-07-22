import NavBar from './NavBar';
import Search from './Search';
import './Header.css';

const Header = () => {
    return (
       <div className="top-header">
           <div className="h-title">
            <h3>Kokomo</h3>
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