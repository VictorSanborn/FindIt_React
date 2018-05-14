import axios from 'axios';


export const loginUser = (username, password) => {
  try {
    return axios.get('http://localhost:5470/User/GetUserID?username='+username+'&password='+password+'');
  } catch (error) {
    console.error(error);
  }
};