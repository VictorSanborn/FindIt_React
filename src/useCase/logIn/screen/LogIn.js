import React, { Component } from 'react';
import TestTexts from '../container/TestTexts';
import LogInTitle from '../container/LogInTitle';
import LogInButton from '../component/LogInButton';
import LogInBox from '../component/LogInBox';

class LogIn extends Component {
  render() {
    return (
      <div>
       <LogInTitle logInData ={'Username'} />
       <LogInBox logInType = {"text"}/> 
       <LogInTitle logInData ={'Password'} />
       <LogInBox logInType ={"password"}/> 
       <LogInButton behavior = {"submit"}> sign in</LogInButton>
       
      </div>
    );
  }
}
export default LogIn;
