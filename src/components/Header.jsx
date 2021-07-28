import SelectBar from "./SelectBar";
import Search from "./Search";
import "./Header.css";

const Header = () => {
  return (
    <div className='top-header'>
      <div className='h-title'>
        <h3>Kokomo</h3>
      </div>
      <div className='search'>
        <Search />
      </div>
      <div className='button-bar'>
        <SelectBar />
      </div>
    </div>
  );
};

export default Header;
