import React from 'react';
 
import { withFirebase } from '../Firebase';
 
const SignOutButton = ({ firebase }) => {
  firebase.doSignOut()
}
 
export default withFirebase(SignOutButton);