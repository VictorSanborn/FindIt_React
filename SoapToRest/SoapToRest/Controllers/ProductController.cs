using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace SoapToRest.Controllers
{
    public class ProductController : ApiController
    {

        ProductService.ProductServiceClient client = new ProductService.ProductServiceClient();
        
        
        
        // GET: /ProductService/GetAllProducts?showDiscounted=false
        [HttpGet]
        public ProductService.Product[] GetAllProducts()
        {
            ProductService.Product[] products = new ProductService.Product[] { };
            try
            {

                products = client.GetAllProducts();

            }
            catch (Exception e)
            {
                Trace.TraceError(e.Message);
            }
            return products;
        }

        public ProductService.PriceReport[] GetPricesFromProduct(int productId)
        {
            ProductService.PriceReport[] priceReport = client.GetPricesFromProduct(productId);
            return priceReport;
        }

        public ProductService.Product GetProduct(int id)
        {

            ProductService.Product p = client.GetProductDetails(id);

            return p;

        }

        public ProductService.PriceReport GetLowestPrice(int productId)
        {
            ProductService.PriceReport[] priceReport = client.GetPricesFromProduct(productId);
            ProductService.PriceReport lowest = new ProductService.PriceReport();
            if (priceReport.Length > 0)
            {
                lowest = priceReport[0];
            }

            
            foreach (ProductService.PriceReport p in priceReport)
            {
                if (lowest.price > p.price)
                {
                    lowest = p;
                }
            }

            return lowest;
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

        public ProductService.ProductAtBusiness[] GetProductsAtBusiness(int businessId)
        {

            ProductService.ProductAtBusiness[] products = client.GetProductsAtBusiness(businessId);
            return products;
        }

        /*public List<ProductService.PriceReport[]> GetProductsFromBusinessWithPrices(int businessId)
        {
            ProductService.Product[] products = client.GetProductsFromBusiness(businessId);
            List<ProductService.PriceReport[]> productsWithPrice = new List<ProductService.PriceReport[]>();
            foreach (ProductService.Product p in products)
            {
                productsWithPrice.Add(client.GetPricesFromProductAtBusiness(p.id, businessId));
            }

            return productsWithPrice;
        }*/

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

        public ProductService.Attribute[] GetAllAttributes()
        {
            ProductService.Attribute[] attr = new ProductService.Attribute[] { };
            try
            {
                attr=  client.GetAllAttributes();
            }
            catch
            {
            }

            return attr;
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
