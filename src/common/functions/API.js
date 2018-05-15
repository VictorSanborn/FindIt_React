import axios from 'axios';

let serverUri = 'http://localhost:5470';

export const loginUser = (username, password) => {
  try {
    return axios.get(serverUri + '/User/GetUserID?username='+username+'&password='+password+'');
  } catch (error) {
    console.error(error);
  }
};

export const signupUser = (Username, Password, FName, LName, Email) => {
  try {
    let data = {"Username":Username,"Password":Password,"Fname":FName,"LName":LName,"Email":Email}
    console.log(data);
    return axios.post(serverUri + '/User/CreateUser', data);
  } catch (error) {
    console.error(error);
  }
};