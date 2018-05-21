import axios from 'axios';

let serverUri = 'https://finditappapi.azurewebsites.net';

//
//  GET
//

export const loginUser = (username, password) => {
  try {
    return axios.get(serverUri + '/User/GetUserID?username='+username+'&password='+password+'');
  } catch (error) {
    console.error(error);
  }
};

export const getBuisness = (id) => {
  try {
    return axios.get(serverUri + '/Business/GetBusinessById/'+id);
  } catch (error) {
    console.error(error);
  }
};

export const getReview = (establishmentID, UserId) => {
  try {
      if(UserId !== 0 && UserId !== ''){
        return axios.get(serverUri + '/User/GetRatingWithUser?establishmentID='+establishmentID+'&userID='+UserId);
      } else{
        return axios.get(serverUri + '/User/GetRatingWithUser?establishmentID='+establishmentID+'&userID=0');
      }
    
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

export const GetProductsFromBusiness = (businessId) => {
  try {
    return axios.get(serverUri + '/Product/GetProductsFromBusiness?businessId='+businessId);
  } catch (error) {
    console.error(error);
  }
};

export const GetPricesFromProductAtBusiness = (businessId, productId) => {
  try {
    return axios.get(serverUri + '/Product/GetPricesFromProductAtBusiness?productId='+productId+'&businessId='+businessId);
  } catch (error) {
    console.error(error);
  }
};


//
//  POST
//

export const signupUser = (Username, Password, FName, LName, Email) => {
  try {
    let data = {"Username":Username,"Password":Password,"Fname":FName,"LName":LName,"Email":Email}
    return axios.post(serverUri + '/User/CreateUser', data);
  } catch (error) {
    console.error(error);
  }
};

export const sendReview = (UserId, establishmentID, rating) => {
  try {
    let data = {}
    return axios.post(serverUri + '/User/UpdateEstablishment?establishmentID='+establishmentID+'&rating='+rating+'&userID='+UserId);
  } catch (error) {
    console.error(error);
  }
};