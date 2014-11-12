using System.Web.Mvc;

namespace adalMVC.Controllers
{
    public class AppController : Controller
    {
        public ActionResult Home()
        {
            return PartialView();
        }

        public ActionResult Values()
        {
            return PartialView();
        }
    }
}