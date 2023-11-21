using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;
// using Microsoft.EntityFrameworkCore;
using dotnetapp.Models;
 
namespace dotnetapp.Controllers
{
    // [ApiController]
    // [Route("/[controller]")]
    public class TeamController : ControllerBase
    {
        private readonly ApplicationDbContext _context;
 
        public TeamController(ApplicationDbContext context)
        {
            _context = context;
        }
 
        
        [HttpGet]
        [Route("ShowTeams")]
        public IActionResult GetTeams()
        {
            var data = _context.Teams.ToList();
            return Ok(data);
        }
 
        [HttpPost]
        [Route("AddTeams")]
        public IActionResult Post(Team t)
        {
            if(ModelState.IsValid)
            {
                try
                {
                    _context.Teams.Add(t);
                    _context.SaveChanges();
                }
                catch(System.Exception ex)
                {
                    return BadRequest(ex.InnerException.Message);
                }
            }
            return Created("Record Added", t);
        }
       
        [HttpPut]
        [Route("EditMovie/{id}")]
        public IActionResult PutTeam(int id ,Team t)
        {
            // var data = _context.Players.Find(id);
 
            try
            {
               
                        if(ModelState.IsValid)
                        {
                            Team teams = _context.Teams.Find(t.TeamId);
                            // var Player = new Player
                            // {
                            //     Id= 1,
                            //     Name = "John Doe",
                            //     Age= 24,
                            //     BiddingPrice= 25,
                            //     Category="asd"
                            // };
                            
                            teams.TeamName = t.TeamName;
                            
                            _context.SaveChanges();
                            return Ok();                
                        }
                        return BadRequest("Unable to Edit Record");
            }
            catch(System.Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }
 
        [HttpDelete]
        [Route("DeleteTeam/{id}")]
        public IActionResult DeleteTeam(int id)
        {
            try
            {
                // var detail = _context.Players.Where(d=>d.Id==id);
                // if(detail.Count() != 0)
                // {
                //     throw new Exception("Cannot Delete Player");
                // }
                var data = _context.Teams.Find(id);
                _context.Teams.Remove(data);
                _context.SaveChanges();
                return Ok();
            }
            catch (System.Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }
       
    }
}