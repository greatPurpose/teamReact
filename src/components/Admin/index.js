import React, {Component} from 'react';
import { withFirebase } from '../Firebase';
import { DataGrid } from '@material-ui/data-grid';
import { Link } from 'react-router-dom';
import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@material-ui/core';

class AdminPage extends Component {
  constructor(props) {
    super(props);
 
    this.state = {
      loading: false,
      cards: [],
    };
  }

  omponentWillUnmount() {
    this.props.firebase.cards().off();
  }

  componentDidMount() {
    this.setState({ loading: true });
 
    
    this.props.firebase.cards().on('value', snapshot => {
      const cardObject = snapshot.val();
      if (cardObject != null)
      {
        const cardList = Object.keys(cardObject).map(key => ({
          ...cardObject[key],
          uid: key,
        }));
        
        this.setState({
          cards: cardList,
          loading: false,
        });

      }
      
    });
  }

  render() {
    return (
      <div className="container">
        <div className="panel panel-default">
          <div className="panel-heading">
            <h3 className="panel-title">
              BOARD LIST
            </h3>
          </div>
          <h4><Link to="/create">Add Board</Link></h4>
          <div className="panel-body">
          <TableContainer component={Paper}>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Title</TableCell>
            <TableCell >Description</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {this.state.cards.map((board, idx) =>
          <TableRow key={idx}>
            <TableCell component="th" scope="row">
              <Link to={`/show/${board.uid}`}>{board.title}</Link>
              </TableCell>
              <TableCell >
                {board.description}
              </TableCell>
          </TableRow>             
            )}
        </TableBody>
        </Table>
        </TableContainer>
            
          </div>
        </div>
      </div>
    );
  }
}
 
export default withFirebase(AdminPage);