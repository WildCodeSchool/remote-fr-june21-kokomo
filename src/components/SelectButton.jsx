import React, { useRef } from "react";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import Fade from "@material-ui/core/Fade";
import "./SelectBar.css";

const SelectButton = ({ title, handleChange, name, values }) => {
  const showElement = useRef();

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = (event) => {
    setAnchorEl(null);
    const { value } = event.currentTarget.dataset;
    handleChange(value);
  };

  return (
    <div className='group-buttons' ref={showElement}>
      <Button
        aria-controls='fade-menu'
        aria-haspopup='true'
        onClick={handleClick}
      >
        {title}
      </Button>

      <Menu
        id='fade-menu'
        anchorEl={anchorEl}
        keepMounted
        open={open}
        onClose={handleClose}
        TransitionComponent={Fade}
      >
        {values.map((element, index) => (
          <MenuItem
            key={index}
            data-value={element.value}
            name={name}
            onClick={handleClose}
          >
            {element.name}
          </MenuItem>
        ))}
      </Menu>
    </div>
  );
};

export default SelectButton;
