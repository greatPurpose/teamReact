import React from 'react'
import { AuthUserContext } from '../Session';
import InboxIcon from '@material-ui/icons/Inbox';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import * as ROUTES from '../../constants/routes';
import SignOutButton from '../SignOut';
const Navigation = () => (
    <div>
        <AuthUserContext.Consumer>
            {authUSer =>authUSer?  <NavigationAuth /> : <NavigationNonAuth />}
        </AuthUserContext.Consumer>        
    </div>
);

const NavigationAuth =() =>
    (
        <List>
          <ListItem button component="a" href={ROUTES.LANDING}>
            <ListItemIcon> <InboxIcon /> </ListItemIcon>
            <ListItemText primary={'Home'} />
          </ListItem>
          <ListItem button component="a" href={ROUTES.ACCOUNT}>
            <ListItemIcon> <InboxIcon /> </ListItemIcon>
            <ListItemText primary={'Account'} />
          </ListItem>
          <ListItem button component="a" href={ROUTES.ADMIN}>
            <ListItemIcon> <InboxIcon /> </ListItemIcon>
            <ListItemText primary={'Admin'} />
          </ListItem>
          <ListItem button component="a">
            <ListItemIcon> <InboxIcon /> </ListItemIcon>
            <ListItemText >
              <SignOutButton/>
              </ListItemText>
          </ListItem>
      </List>  
    );


const NavigationNonAuth = () => (
    <List>
        
          <ListItem button component="a" href={ROUTES.LANDING}>
            <ListItemIcon> <InboxIcon /> </ListItemIcon>
            <ListItemText primary={'Home'} />
          </ListItem>
          <ListItem button component="a" href={ROUTES.SIGN_IN}>
            <ListItemIcon> <InboxIcon /> </ListItemIcon>
            <ListItemText primary={'SignIn'} />
          </ListItem>
      </List>  

);

export default Navigation;