import axios from 'axios';

let serverUri = 'http://193.10.202.73';

export const loginUser = (username, password) => {
  try {
    return axios.get(serverUri + '/User/GetUserID?username='+username+'&password='+password+'');
  } catch (error) {
    console.error(error);
  }
};