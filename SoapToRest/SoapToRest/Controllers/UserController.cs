using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace SoapToRest.Controllers
{


    public class UserController : ApiController
    {
        UserService.Service1Client client = new UserService.Service1Client();

        public HttpStatusCode LoginUser(string username, string password)
        {

            bool result = client.LoginUser(username, password);

            if (result)
            {
                return HttpStatusCode.OK;
            }
            else
            {
                return HttpStatusCode.Unauthorized;
            }
        }
        [HttpPost]
        public HttpStatusCode CreateUser(string username, string password, string firstname, string lastname, string email)
        {
            try
            {
                client.CreateUser(username, password, firstname, lastname, email);
            }
            catch
            {
                return HttpStatusCode.Forbidden;
            }

            return HttpStatusCode.OK;
        }

        public UserID GetUserID(string username, string password)
        {
            UserID user = new UserID();
            try
            {
                user.userID = client.GetUserID(username, password).ToString();
            }
            catch (Exception e)
            {
            }

            return user;

        }

        public UserService.UserInfo[] GetUserInfo()
        {

            UserService.UserInfo[] users = new UserService.UserInfo[] { };

            try
            {
                users = client.GetUserInfo();
            }
            catch
            {

            }

            return users;

        }
        public UserService.UserInfo GetSpecificUserInfo(int userID)
        {
            UserService.UserInfo user = new UserService.UserInfo();
            UserService.UserInfo[] users = new UserService.UserInfo[] { };

            try
            {
                users = client.GetUserInfo();
                foreach (UserService.UserInfo u in users)
                {
                    if (u.ID == userID)
                    {
                        user = u;
                    }
                }
            }
            catch
            {

            }

            return user;

        }

        public UserService.EstablishmentInfo[] GetEstablishmentInfo(int? userID)
        {
            UserService.EstablishmentInfo[] establishmentInfos = new UserService.EstablishmentInfo[] { };
            try
            {
                establishmentInfos = client.GetEstablishmentInfo(userID);


            }
            catch
            {

            }
            return establishmentInfos;
        }

        public UserService.EstablishmentInfo[] GetEstablishments()
        {
            UserService.EstablishmentInfo[] establishmentInfos = new UserService.EstablishmentInfo[] { };
            try
            {
                establishmentInfos = client.GetEstablishments();
            }
            catch
            {

            }
            return establishmentInfos;
        }


        public HttpStatusCode UpdateEstablishment(int establishmentID, int rating, int userID)
        {
            UserService.UserInfo user = new UserService.UserInfo();

            try
            {
                client.UpdateEstablishment(establishmentID, rating, userID);
            }
            catch (Exception e)
            {
                return HttpStatusCode.NotFound;
            }

            return HttpStatusCode.OK;

        }
    }
}
