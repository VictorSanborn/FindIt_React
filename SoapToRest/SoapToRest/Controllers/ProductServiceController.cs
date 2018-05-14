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
        public ProductService.Product[] GetAllProducts()
        {
            ProductService.Product[] products = client.GetAllProducts();
            return products;
        }

        // Productservice/GetAllCategories
        public ProductService.Category[] GetProductCategories()
        {
            ProductService.Category[] categories = client.GetProductCategories();
            return categories;
        }

        public ProductService.PriceReport[] GetPricesFromProductAtBusiness(int productId, int businessId)
        {
         
            ProductService.PriceReport[] priceReports = client.GetPricesFromProductAtBusiness(productId, businessId);
            return priceReports;
        }

        public HttpStatusCode ReportPrice(ProductService.PriceReport priceReport)
        {
            try
            {
                client.ReportPrice(priceReport);
            }
            catch
            {
                return HttpStatusCode.Forbidden;
            }

            return HttpStatusCode.OK;
        }

        public ProductService.Group[] GetProductGroups(ProductService.PriceReport priceReport)
        {

            ProductService.Group[] productGroups = new ProductService.Group[] { };

            try
            {
                productGroups = client.GetProductGroups();
            }
            catch
            {
               
            }

            return productGroups;
        }

        public ProductService.Type[] GetProductTypes(ProductService.PriceReport priceReport)
        {

            ProductService.Type[] productTypes = new ProductService.Type[] { };

            try
            {
                productTypes = client.GetProductTypes();
            }
            catch
            {

            }

            return productTypes;
        }

    }
}
