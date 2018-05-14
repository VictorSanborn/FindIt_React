using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace SoapToRest
{
    public class UserID
    {
        public string userID { get; set; }

        public UserID()
        {

        }
        public UserID(string userID)
        {
            this.userID = userID;
        }
    }
}