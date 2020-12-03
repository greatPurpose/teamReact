import React, { Component } from 'react';
 
import { withFirebase } from '../Firebase';
import * as ROUTES from '../../constants/routes';
 
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

const PasswordForgetPage = () => (
  <div>
    <PasswordForgetForm />
  </div>
);
 
const INITIAL_STATE = {
  email: '',
  error: null,
};
 
class PasswordForgetFormBase extends Component {
  constructor(props) {
    super(props);
 
    this.state = { ...INITIAL_STATE };
  }
 
  onSubmit = event => {
    const { email } = this.state;
 
    this.props.firebase
      .doPasswordReset(email)
      .then(() => {
        this.setState({ ...INITIAL_STATE });
      })
      .catch(error => {
        this.setState({ error });
      });
 
    event.preventDefault();
  };
 
  onChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };
 
  render() {
    const { email, error } = this.state;


    return (
      <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div >        
        <Typography component="h1" variant="h5">
          Forget Password
        </Typography>
        <form onSubmit={this.onSubmit}  noValidate>
          <Grid container spacing={2} >                        
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                value={this.state.email}
                onChange={this.onChange}
                autoComplete="email"
              />
            </Grid>            
          </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"               
            >
              Reset Password
            </Button>

            {error && <p>{error.message}</p>}
        </form>
      </div>

    </Container>

     
    );
  }
}
 
const PasswordForgetLink = () => (
  <p>
    <Link to={ROUTES.PASSWORD_FORGET}>Forgot Password?</Link>
  </p>
);
 
export default PasswordForgetPage;
 
const PasswordForgetForm = withFirebase(PasswordForgetFormBase);
 
export { PasswordForgetForm, PasswordForgetLink };