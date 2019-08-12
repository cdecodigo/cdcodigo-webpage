import React from 'react';

import { withFirebase } from '../Firebase';

const SignOutButton = ({ firebase }) => (
   <button type="button" onClick={firebase.doSignOut}>
    Sign Out
   </button> 
);

const SignOutPowerButtomBase = ({ firebase }) => (
   <i 
      className="fas fa-power-off" 
      // style={{
      //    marginLeft: '16px', 
      //    color: '#FFF',
      //    cursor: 'pointer'
      // }} 
      onClick={firebase.doSignOut}></i>
);

const SignOutPowerButtom = withFirebase(SignOutPowerButtomBase);

export default withFirebase(SignOutButton);

export {SignOutPowerButtom};