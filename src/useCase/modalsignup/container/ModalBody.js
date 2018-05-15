import React, { Component } from 'react';
import InputWithLable from '../container/InputWithLable';

class ModalBody extends Component {
  render() { 
    const { 
      UsernameInput, onChangeUsername,
      PasswordInput, onChangePassword,
      FNameInput, onChangeFName,
      LNameInput, onChangeLName,
      EmailInput, onChangeEmail,
    } = this.props;
    return (
      <div class="modal-body" style={{backgroundColor: 'white'}}>
        <InputWithLable text={FNameInput} onChange={onChangeFName} title="Förnamn" placeholder="" type="text" />
        <InputWithLable text={LNameInput} onChange={onChangeLName} title="Efternamn" placeholder="" type="text" />
        <InputWithLable text={EmailInput} onChange={onChangeEmail} title="E-post" placeholder="" type="text" />
        <InputWithLable text={UsernameInput} onChange={onChangeUsername} title="Användarnamn" placeholder="" type="text" />
        <InputWithLable text={PasswordInput} onChange={onChangePassword} title="Lösenord" placeholder="" type="password" />
      </div>
    );
  }
} 

export default ModalBody;