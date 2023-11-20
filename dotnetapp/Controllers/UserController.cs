using System.Threading.Tasks;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;
// using Microsoft.EntityFrameworkCore;
using dotnetapp.Models;
 
namespace dotnetapp.Controllers
{
    [ApiController]
    [Route("/[controller]")]
    public class UserController : ControllerBase
    {
        private readonly ApplicationDbContext _context;
 
        public UserController(ApplicationDbContext context)
        {
            _context = context;
        }
        public IActionResult Login(User user)
        {
            var data = _context.Players.ToList();
            return Ok(data);
        }
        public IActionResult Register(User user)
        {
            var data = _context.Players.ToList();
            return Ok(data);
        }
 
       
    }
}