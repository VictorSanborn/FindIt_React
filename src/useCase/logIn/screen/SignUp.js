import React, { Component } from 'react';
import TestTexts from '../container/TestTexts';
import LogInTitle from '../container/LogInTitle';
import LogInButton from '../component/LogInButton';
import LogInBox from '../component/LogInBox';
import LogIn from './LogIn';


class SignUp extends Component {
  render() {
    return (
      <div class="col-sm-6 offset-sm-3">
          <TestTexts logInData = {'Firstname'} logInType = {'text'}/>
          <TestTexts logInData = {'Lastname'} logInType = {'text'}/>
          <TestTexts logInData = {'Username'} logInType = {'text'}/>
          <TestTexts logInData = {'Password'} logInType = {'password'}/>
          <LogInButton algin = "right" behavior = {"submit"} children ="sign up"></LogInButton>
          </div>
    );
  }
}
export default SignUp;