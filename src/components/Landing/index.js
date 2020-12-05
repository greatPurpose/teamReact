import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
const useStyles = makeStyles({
    root: {
      maxWidth: 345,
    },
    media: {
      height: 180,
    },
  });

export default function LandingPage()  {
        const classes = useStyles();

        const items = []

        for ( var i = 0; i <  8 ; i ++)        
        {
            items.push( 
            <Grid item xl={3}>
                <Card className={classes.root}>
                    <CardActionArea>
                        <CardMedia
                        className={classes.media}
                        image="https://www.visa.co.in/dam/VCOM/regional/ap/india/global-elements/images/in-visa-classic-card-498x280.png"
                        title="Contemplative Reptile"
                        />
                        <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            Card title
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                            Some quick example text to build on the card title and make up the bulk of the card's content
                        </Typography>
                        </CardContent>
                    </CardActionArea>
                    <CardActions>
                        <Button size="small" color="primary" variant="contained">
                        Go Somewhere
                        </Button>
                    </CardActions>
                </Card>
            </Grid>);
        }

        return(
            <Container component="main" maxWidth="xl">
                <Grid container spacing={2} >   
                    {items}
                </Grid>
            </Container>
        );    
}


