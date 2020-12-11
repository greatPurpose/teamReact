import React, { Component } from 'react';
import {withFirebase} from '../Firebase';
import { Link } from 'react-router-dom';
import { Button, Container, CssBaseline, Grid, Typography } from '@material-ui/core';

class Show extends Component {

  constructor(props) {
    super(props);
    this.state = {
      title:'',
      description:'',
      key: ''
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
  };
      
    
  delete(id){
    this.props.firebase.card(this.props.match.params.id).remove().then(() => {
      console.log("Document successfully deleted!");
      this.props.history.push("/admin")
    }).catch((error) => {
      console.error("Error removing document: ", error);
    });
  }

  render() {
    return (
      <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div >    
        <Grid container spacing={2} >                        
          <Grid item xs={6}>
              <Typography component="h1" variant="h5">
                Title:
              </Typography>
          </Grid>
          <Grid item xs={6}>
              <Typography component="h1" variant="h5">
              {this.state.title}
              </Typography>
          </Grid>
          <Grid item xs={6}>
              <Typography component="h1" variant="h5">
                Description:
              </Typography>
          </Grid>
          <Grid item xs={6}>
              <Typography component="h1" variant="h5">
              {this.state.description}
              </Typography>
          </Grid>
          <Grid item xs={6}>
            <Button
                fullWidth
                variant="contained"
                color="primary"               
              >
                <Link to={`/edit/${this.state.key}`} variant="body2">Edit</Link>
              </Button>            
          </Grid>
          <Grid item xs={6}>
          <Button
                fullWidth
                variant="contained"
                color="primary" 
                onClick={this.delete.bind(this, this.state.key)}              
              >
                DELETE
            </Button>            
          </Grid>
          </Grid>
        </div>
      </Container>

    );
  }
}

export default withFirebase(Show);