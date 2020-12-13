import React, { Component } from 'react';

import { withFirebase } from '../Firebase';
import * as ROUTES from '../../constants/routes';

import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';


const INITIAL_STATE = {
  username: '',
  email: '',
  passwordOne: '',
  passwordTwo: '',
  key: '',
  error: null,
};

class AccountPage extends Component {

  constructor(props) {
    super(props); 
    this.state = { ...INITIAL_STATE };
  }

  onSubmit = event => {
    
    event.preventDefault();

    const { username, email, key } = this.state;
    
        this.props.firebase.user(key).set({username, email})
        .then(() => {      
          this.setState({ ...INITIAL_STATE });
          this.props.history.push(ROUTES.LANDING);        
        });    
    }
 
  onChange = event => {
    this.setState({ [event.target.name]: event.target.value }); 
  };

  componentDidMount() {
    this.props.firebase.currentuser().on('value', snapshot=>{
      const userObj = snapshot.val();
      if (userObj!= null) {        
        this.setState({
          username: userObj.username,
          email: userObj.email,
          key: this.props.firebase.currentuserkey()
        }) 
      }
    })
  }
 
  render() {
    const {username, email, passwordOne, passwordTwo } = this.state;

    return (
      <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div >   
      <form onSubmit={this.onSubmit}  noValidate>
        <Grid container spacing={2} >                        
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="username"
                label="User Name"
                name="username"
                value={username}
                autoComplete="name"
              />
            </Grid>            
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="email"
                label="Email"
                name="email"
                value={email}
                autoComplete="email"
              />
            </Grid>            
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                type="password"
                id="password"
                label="Current Password"
                name="passwordOne"
                value={passwordOne}
                onChange={this.onChange}
                autoComplete="current-password"
              />
            </Grid>            
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="passwordTwo"
                value={passwordTwo}
                onChange={this.onChange}
                label="Confirm Password"
                type="password"
                id="twopassword"
                autoComplete="confirm-password"
              />
            </Grid>            
          </Grid>
          <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"               
            >
              UPDATE
            </Button>
        </form>
        </div>
      </Container>
    );
  }
}
 
 
export default withFirebase(AccountPage);