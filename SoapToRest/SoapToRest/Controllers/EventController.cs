using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace SoapToRest.Controllers
{
    public class EventController : ApiController
    {
        EventService.Service1Client client = new EventService.Service1Client();

        public EventService.DetailedEvent[] GetEvents()
        {
            EventService.DetailedEvent[] events = new EventService.DetailedEvent[] { };
            try
            {
                events = client.getEvents();
            }
            catch
            {

            }


            return events;

        }

        public EventService.DetailedEvent GetEvent(int eventID)
        {
            EventService.DetailedEvent anEvent = new EventService.DetailedEvent();
            try
            {
                anEvent = client.getEvent(eventID);
            }
            catch
            {

            }

            return anEvent;

        }

        public EventService.DetailedEvent[] getUpcomingEvents()
        {
            EventService.DetailedEvent[] events = new EventService.DetailedEvent[] { };
            try
            {
                events = client.getUpcomingEvents();
            }
            catch
            {
                
            }

            return events;

        }

        public EventService.DetailedEvent[] getTodaysEvents()
        {
            EventService.DetailedEvent[] events = new EventService.DetailedEvent[] { };
            try
            {
                events = client.getTodaysEvents();
            }
            catch
            {

            }

            return events;

        }

        public EventService.Categories[] ReadCategories()
        {
            EventService.Categories[] categories = new EventService.Categories[] { };
            try
            {
                categories = client.readCategories();
            }
            catch
            {

            }

            return categories;

        }

        public string[] ListCategories()
        {
            string[] categories = new string[] { };
            try
            {
                categories = client.listCategories();
            }
            catch
            {
            }

            return categories;

        }


    }
}
