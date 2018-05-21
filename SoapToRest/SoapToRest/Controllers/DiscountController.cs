using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace SoapToRest.Controllers
{
    public class DiscountController : ApiController
    {
        DiscountService.DiscountsClient client = new DiscountService.DiscountsClient();

        public DiscountService.DiscountInfo[] GetOrganisationDiscounts(int organisationID)
        {

            DiscountService.DiscountInfo[] discountInfo = new DiscountService.DiscountInfo[] { };

            discountInfo = client.GetOrganisationDiscounts(organisationID);

            return discountInfo;
        }
    
        public DiscountService.Product[] GetADiscountsProducts(int DiscountID)
        {

            DiscountService.Product[] Product = new DiscountService.Product[] { };

            Product = client.GetADiscountsProducts(DiscountID);

            return Product;
        }

        public DiscountService.DiscountInfo[] GetDiscounts()
        {

            DiscountService.DiscountInfo[] discountInfo = new DiscountService.DiscountInfo[] { };

            discountInfo = client.GetDiscounts();

            return discountInfo;
        }

    }
}
