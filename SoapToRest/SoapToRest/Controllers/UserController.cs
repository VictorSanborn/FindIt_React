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
    }
}
