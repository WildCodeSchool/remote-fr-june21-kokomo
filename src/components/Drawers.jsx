import clsx from "clsx";
import { Fragment, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import Button from "@material-ui/core/Button";
import List from "@material-ui/core/List";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

import SelectBar from "./SelectBar";

import "./Footer.css";

const useStyles = makeStyles({
  list: {
    width: 250,
  },
  fullList: {
    width: "auto",
  },
});

export default function SwipeableTemporaryDrawer() {
  const classes = useStyles();
  const [state, setState] = useState({
    top: false,
    bottom: false,
  });

  const toggleDrawer = (menu, open) => (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    console.log("setState", open, menu);
    setState({ ...state, [menu]: open });
  };

  const list = (menu) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: menu === "top" || menu === "bottom",
      })}
      role='presentation'
      onClick={toggleDrawer(menu, false)}
      onKeyDown={toggleDrawer(menu, false)}
    >
      <List>
        <SelectBar />
      </List>
    </div>
  );

  return (
    <div>
      {["bottom"].map((anchor) => (
        <Fragment key={anchor}>
          <Button className='burger' onClick={toggleDrawer(anchor, true)}>
            <FontAwesomeIcon icon={faBars} size='2x' />
          </Button>
          <SwipeableDrawer
            anchor={anchor}
            variant='persistent'
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
            onOpen={toggleDrawer(anchor, true)}
          >
            {list(anchor)}
          </SwipeableDrawer>
        </Fragment>
      ))}
    </div>
  );
}
