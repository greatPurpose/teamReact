import React from 'react';
import { AuthUserContext, withAuthorization } from '../Session';
import { PasswordForgetForm } from '../PasswordForget';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';

const AccountPage = () => (
  <AuthUserContext.Consumer>
    {authUser => (
       <Container component="main" maxWidth="xs">
       <CssBaseline />
        <div>
        <Typography component="h1" variant="h5">
          Account: {authUser.email}
        </Typography>
        <CssBaseline />
          <PasswordForgetForm />
        </div>
      </Container>
    )}
  </AuthUserContext.Consumer>
);
 
const condition = authUser => !!authUser;
 
export default withAuthorization(condition)(AccountPage);