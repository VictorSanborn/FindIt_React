using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace SoapToRest.Controllers
{
    public class AdvertisingController : ApiController
    {
        AdvertisingService.ServiceAdvertisingClient client = new AdvertisingService.ServiceAdvertisingClient();

        [HttpGet]
        public AdvertisingService.AnnonsKlass[] ReadAnnons()
        {
            AdvertisingService.AnnonsKlass[] annonser = new AdvertisingService.AnnonsKlass[] { };
            try
            {
               annonser = client.ReadAnnons();
            }
            catch
            {

            }

            return annonser;
        }


        public void CreateAnnons(string resource, string onHooverTex)
        {
            AdvertisingService.AnnonsKlass[] annonser = new AdvertisingService.AnnonsKlass[] { };
            try
            {
                client.CreateAnnons(resource, onHooverTex);
            }
            catch
            {

            }

        }


    }

}
