import axios from 'axios';

let serverUri = 'http://193.10.202.73';

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

export const getAllEvents = () => {
  try {
    return axios.get(serverUri + '/Event/GetEvents');
  } catch (error) {
    console.error(error);
  }
};