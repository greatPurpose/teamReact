import React from 'react';
import { AuthUserContext, withAuthorization } from '../Session';
import { PasswordForgetForm } from '../PasswordForget';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';
import { Button, Grid, TextField } from '@material-ui/core';

const AccountPage = () => (
  <AuthUserContext.Consumer>
    {authUser => (
       <Container component="main" maxWidth="xs">
         <Typography component="h1" variant="h5">
          Profile Information
        </Typography>
       <CssBaseline />
        <div>
        <Grid container spacing={2} >                        
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="username"
                label="User Name"
                name="username"
                value={authUser.username}
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
                value={authUser.email}
                autoComplete="email"
              />
            </Grid>            
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="passwordOne"
                label="Current Password"
                name="passwordOne"
                value={authUser.password}
                autoComplete="current-password"
              />
            </Grid>            
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="passwordTwo"
                label="Confirm Password"
                name="passwordTwo"
                value={authUser.password}
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
        </div>
      </Container>
    )}
  </AuthUserContext.Consumer>
);
 
const condition = authUser => !!authUser;
 
export default withAuthorization(condition)(AccountPage);