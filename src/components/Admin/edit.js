import React, { Component } from 'react';
import {withFirebase} from '../Firebase';
import { Link } from 'react-router-dom';
import { Button, Container, CssBaseline, Grid, TextField, Typography } from '@material-ui/core';

class Edit extends Component {

  constructor(props) {
    super(props);
    this.state = {
      key: '',
      title: '',
      description: '',
    };
  }

  componentDidMount() {
    this.props.firebase.card(this.props.match.params.id).on('value', snapshot=>{
      const cardObj = snapshot.val();
      if (cardObj!= null) {
        
        this.setState({
          title: cardObj.title,
          description: cardObj.description,
          key: this.props.match.params.id
        }) 
      }
    })
  }

  onChange =  event => {
    this.setState({ [event.target.name]: event.target.value }); 
  };

  onSubmit = (e) => {
    e.preventDefault();

    const { title, description } = this.state;

    this.props.firebase.card(this.state.key)
    .set({
      title,
      description
    }).then((docRef) => {
      this.setState({
        key: '',
        title: '',
        description: '',
      });
      this.props.history.push("/show/"+this.props.match.params.id)
    })
    .catch((error) => {
      console.error("Error adding document: ", error);
    });
  }

  render() {
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
                Edit
              </Button>            
          </Grid>          
          </Grid>
          </form>
        </div>
      </Container>

    );
  }
}

export default withFirebase(Edit);