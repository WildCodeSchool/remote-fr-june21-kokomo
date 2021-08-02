import { NavLink } from "react-router-dom";

import Search from "./Search";

import "./Header.css";

const Header = () => {
  return (
    <div className='top-header'>
      <div className='h-title'>
        <NavLink className='linkKokomo' to='/cocktails'>
          <h3>Kokomo</h3>
        </NavLink>
      </div>
      <div className='search'>
        <Search />
      </div>
    </div>
  );
};

export default Header;
