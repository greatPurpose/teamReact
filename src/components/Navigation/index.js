import React from 'react'
import { AuthUserContext } from '../Session';
import InboxIcon from '@material-ui/icons/Inbox';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import * as ROUTES from '../../constants/routes';
import SignOutButton from '../SignOut';
import { AppBar, Button, makeStyles, Menu, MenuItem, Toolbar, Typography } from '@material-ui/core';
import { MenuIcon, RightEmptyCell } from '@material-ui/data-grid';
import { Link, Route } from 'react-router-dom';

const Navigation = () => (
    <div>
        <AuthUserContext.Consumer>
            {authUSer =>authUSer?  <NavigationAuth /> : <NavigationNonAuth />}
        </AuthUserContext.Consumer>        
    </div>
);

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: theme.spacing(2),
    flot:RightEmptyCell,
  },
  title: {
    flexGrow: 1,
  },
  homeMaginRight : {
    marginRight: 20,
  }
}));


const NavigationAuth =() =>{
  const classes = useStyles();

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  
   
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar> 
          <Link to={ROUTES.LANDING} className={classes.homeMaginRight} variant="body2">
                Home
          </Link>   
          <Link to={ROUTES.ADMIN} className={classes.title} variant="body2">
                List
          </Link>   
          <Button component="a" color="inherit" onClick={handleClick}>
            <MenuIcon/>
          </Button>    
          <Menu
            id="simple-menu"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            <MenuItem >
              <Link to={ROUTES.ACCOUNT}>Profile</Link></MenuItem>            
            <MenuItem >
              <Link to={ROUTES.SIGN_OUT}>Logout</Link>
              </MenuItem>
          </Menu>    
        </Toolbar>
      </AppBar>
    </div> 
    );
  }
     
   

const NavigationNonAuth = () => {
  const classes = useStyles();

  return (
  <div className={classes.root}>
    <AppBar position="static">
      <Toolbar>  
        <Link to={ROUTES.LANDING} className={classes.title} variant="body2">      
          Home
        </Link>
        <Link color="inherit" className={classes.homeMaginRight} to={ROUTES.SIGN_IN}>Sign In</Link>
        <Link component="a" color="inherit" to={ROUTES.SIGN_UP}>Register</Link>
      </Toolbar>
    </AppBar>
  </div> 
  );
     

  };

export default Navigation;