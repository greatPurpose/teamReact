import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {withFirebase} from '../Firebase';
import { Link } from 'react-router-dom';
import { Button, Container, CssBaseline, Grid, TextField, Typography } from '@material-ui/core';

class Create extends Component {

  constructor(props) {
    super(props);        
    this.state = {
      title: '',
      description: ''
    };
  }
  onChange =  event => {
    this.setState({ [event.target.name]: event.target.value }); 
  };

  onSubmit = (e) => {
    e.preventDefault();

    const { title, description } = this.state;

    var cnt = 0;
    this.props.firebase.cards().on('value', snapshot => {
      const cardObject = snapshot.val();
      
      if (cardObject != null)
      {
        cnt = Object.keys(cardObject).length;
      }
    })
    
      this.props.firebase.card(cnt)
      .set({title, description})
      .then(()=>{
        this.props.history.push("/admin");
      });                  
  }

  render() {
    const { title, description } = this.state;
    return (

      <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div >    
      <form onSubmit={this.onSubmit} noValidate>
        <Grid container spacing={2} >                        
          <Grid item xs={4}>
              <Typography component="h1" variant="h5">
                Title:
              </Typography>
          </Grid>
          <Grid item xs={8}>
             <TextField
                variant="outlined"
                required
                fullWidth
                id="title"                
                name="title"
                value={this.state.title} 
                onChange={this.onChange}                 
                autoComplete="name"
              />             
          </Grid>
          <Grid item xs={4}>
              <Typography component="h1" variant="h5">
                Description:
              </Typography>
          </Grid>
          <Grid item xs={8}>
            <TextField
                variant="outlined"
                required
                fullWidth
                id="description"
                name="description"
                value={this.state.description} 
                onChange={this.onChange}                  
              />
          </Grid>
          <Grid item xs={12}>
            <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"               
              >
                ADD
              </Button>            
          </Grid>          
          </Grid>
          </form>
        </div>
      </Container>

    );
  }
}

export default withFirebase(Create);