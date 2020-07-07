import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';

// CSS Styling
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginBottom: 40,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    fontSize: 24,
  },
  search: {
    backgroundColor: theme.palette.background.default,
    border: "1px solid",
    borderRadius: 3,
    marginRight: 700,
  },
  searchInput: {
    paddingLeft: 15,
    paddingTop: 5,
    width: 700,
    fontSize: 20,
  },
  searchIcon: {
    color: theme.palette.text.primary,
  },
}));

function NavBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="fixed" elevation={0}> {/* elevation removes shadow and fixed position keeps appbar stuck to top of page*/}
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon fontSize="large"/>
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            Tuboid
          </Typography>
          <div className={classes.search}>
            <InputBase placeholder="Search" className={classes.searchInput}/>
            <IconButton className={classes.searchIcon}>
              <SearchIcon fontSize="medium"/>
            </IconButton>
          </div>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default NavBar;