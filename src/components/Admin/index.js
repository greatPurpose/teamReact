import React, {Component} from 'react';
import { withFirebase } from '../Firebase';
import { DataGrid } from '@material-ui/data-grid';
import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';

class AdminPage extends Component {
  constructor(props) {
    super(props);
 
    this.state = {
      loading: false,
      users: [],
    };
  }
 
  componentWillUnmount() {
    this.props.firebase.users().off();
  }

  componentDidMount() {
    this.setState({ loading: true });
 
    this.props.firebase.users().on('value', snapshot => {
      const usersObject = snapshot.val();
 
      const usersList = Object.keys(usersObject).map(key => ({
        ...usersObject[key],
        uid: key,
      }));
      this.setState({
        users: usersList,
        loading: false,
      });
    });
  }
 
  render() {
    const { users, loading } = this.state;

    var i = 1;
    users.forEach(et => {
      et.id = i++;
    });

    return (      
        <Container component="main" maxWidth="xl">
          <CssBaseline />
          <div >        
            {loading && <div>Loading ...</div>}
    
            <UserList users={users} />
          </div>
      </Container>
    );
  }
}
 
const columns = [
  {field:'id', headerName: 'ID', width: 40},
  {field:'email', headerName: 'Email', width: 200},
  {field:'username', headerName: 'UserName', width: 200},
];

const UserList = ({ users }) => (
  
  <div style={{ height: 400, width: '100%' }}>
      <DataGrid rows={users} columns={columns} pageSize={5} />
    </div>
);

export default withFirebase(AdminPage);