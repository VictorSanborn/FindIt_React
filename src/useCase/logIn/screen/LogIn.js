import React, { Component } from 'react';
import TestTexts from '../container/TestTexts';
import LogInTitle from '../container/LogInTitle';
import LogInButton from '../component/LogInButton';
import LogInBox from '../component/LogInBox';
import SignUp from './SignUp';

class LogIn extends Component {
  render() {
    return (
      
      <div class="col-sm-6 offset-sm-3">
        <TestTexts logInData ={'Username'} logInType = {"text"}/>
        <TestTexts logInData ={'Password'} logInType ={"password"}/> 
       <a class="nav-link linkColor" href="/SignUp">SignUp</a>
            <LogInButton behavior = {"submit"} children ="sign in"></LogInButton>
    </div>
    );
  }
}
export default LogIn;
