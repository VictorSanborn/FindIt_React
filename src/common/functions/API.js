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

export const getBusiness = (id) => {
  try {
    return axios.get(serverUri + '/Business/GetBusinessById/'+id);
  } catch (error) {
    console.error(error);
  }
};

export const getCities = () => {
  try {
    return axios.get(serverUri + '/Business/GetCities/');
  } catch (error) {
    console.error(error);
  }
};


export const getAllProducts = () => {
  try {
    return axios.get(serverUri + '/Product/GetAllProducts/');
  } catch (error) {
    console.error(error);
  }
};

export const getProductCategories = () => {
  try {
    return axios.get(serverUri + '/Product/GetProductCategories/');
  } catch (error) {
    console.error(error);
  }
};

export const getLowestPrice = (productId) => {
  try {
    return axios.get(serverUri + '/Product/GetLowestPrice?productId='+productId);
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


export const getAllBusinesses = () => {
  try {
    return axios.get(serverUri + '/Business/GetAll');
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


export const getBusinessesByName = () => {
  try {
    return axios.get(serverUri + '/Business/GetAll');
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

export const sendPrice = (businessId, price, productId, userId) => {
  try {
    let data = {"OccurrenceDT": new Date().toLocaleString(),"businessId": businessId,"id": 0,"price": price,"productId": productId,"userId": userId,"userType": 4}
    return axios.post(serverUri + '/Product/ReportPrice', data);
  } catch (error) {
    console.error(error);
  }
};