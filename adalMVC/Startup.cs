using Microsoft.Owin;
using Owin;


[assembly: OwinStartup(typeof(adalMVC.Startup))]

namespace adalMVC
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}