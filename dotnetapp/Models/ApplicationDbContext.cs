using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Design;
using Microsoft.EntityFrameworkCore.SqlServer;
// using dotnetapp.Models;
//  dotnet tool install --local dotnet-ef --version 6.0.6
// dotnet dotnet-ef --To check the EF installed or not
// dotnet dotnet-ef migrations add "InitialSetup" or dotnet-ef migrations add "initial setup" --command to setup the initial creation of tables mentioned in DBContext
// dotnet dotnet-ef database update or dotnet-ef database uodate
namespace dotnetapp.Models
{
    public class ApplicationDbContext : DbContext
    {
        public virtual DbSet<Player>Players {get;set;}
        public virtual DbSet<Team> Teams {get;set;}
        public virtual DbSet<User> Users {get;set;}
 
        public ApplicationDbContext(){}
 
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options) : base(options)
        {
        }
 
        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if(!optionsBuilder.IsConfigured)
            {
                optionsBuilder.UseSqlServer("User ID=sa;password=examlyMssql@123; server=localhost;Database=ApplicationDb;trusted_connection=false;Persist Security Info=False;Encrypt=False;");
            }
        }
 
        // Add DbSet properties for other entities as needed
    }
}
