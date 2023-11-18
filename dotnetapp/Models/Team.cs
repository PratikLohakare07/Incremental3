using System;
using System.Collections;
using System.Collections.Generic;
 
namespace dotnetapp.Models
{
    public class Team
    {
        public int TeamId {get;set;}
        public string? TeamName{get;set;}
        public virtual ICollection<Player>?Players {get;set;}
 
    }
}