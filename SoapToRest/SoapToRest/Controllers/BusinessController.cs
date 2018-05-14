using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace SoapToRest.Controllers
{
    public class BusinessController : ApiController
    {
        BusinessServiceReference.Service1Client client = new BusinessServiceReference.Service1Client();
    
        public BusinessServiceReference.Business GetBusinessById(int id)
        {
            BusinessServiceReference.Business business = new BusinessServiceReference.Business();

            business =  client.GetBusinessById(id);

            return business;

        }

        public BusinessServiceReference.Business[] GetAll()
        {
            BusinessServiceReference.Business[] businesses = new BusinessServiceReference.Business[] { };

            businesses = client.GetAll();

            return businesses;
        }

        /*public bool AddBusinessUser()
        {
            BusinessServiceReference.BusinessUser newUser = new BusinessServiceReference.BusinessUser();
            newUser.businessId = 
            newUser.
            client.AddBusinessUser();
        }*/
    }
}
