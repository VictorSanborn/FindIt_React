using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace SoapToRest.Controllers
{
    public class ProductServiceController : ApiController
    {

        ProductService.ProductServiceClient client = new ProductService.ProductServiceClient();
        

        // GET: /ProductService/GetAllProducts?showDiscounted=false
        public ProductService.Product[] GetAllProducts(bool showDiscounted)
        {
            ProductService.Product[] products = client.GetAllProducts(false);
            return products;
        }

        // Productservice/GetAllCategories
        public ProductService.Category[] GetAllCategories()
        {
            ProductService.Category[] categories = client.GetProductCategories();
            return categories;
        }

        public ProductService.PriceReport[] GetPricesFromProductAtCompany(int productId, int businessId)
        {
            ProductService.PriceReport[] priceReports = client.GetPricesFromProductAtCompany(productId, businessId);
            return priceReports;
        }
    }
}
