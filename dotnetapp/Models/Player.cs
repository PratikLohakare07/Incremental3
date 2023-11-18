using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace dotnetapp.Models
{
    public class Player
    {
        [Required]
        public int Id{get;set;}
        [Required(ErrorMessage = "Name is required.")]
        public string ?Name{get;set;}
        [Required]
        public int ?Age{get;set;}
        [Required]
        public string ?Category{get;set;}
       
        [Range(0.01, int.MaxValue , ErrorMessage ="Bidding amount must be greater than 0.")]
        public decimal BiddingPrice{get;set;}
        public Team? Team {get;set;}
    }
}