using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using Microsoft.EntityFrameworkCore;
using issueTracker.Data;
using issueTracker.Models;

namespace issueTracker.Controllers
{
   
    [ApiController]
    [Route("api/[controller]")]
    public class ProjectController : ControllerBase
    {
        private readonly ApplicationDbContext _context;

        public ProjectController(ApplicationDbContext context){
            _context = context;
        }

        // GET: api/Project
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Project>>> GetProjects()
        {
            return await _context.Projects.ToListAsync();
        }

         // GET: api/Project/:id
        [HttpGet("{id}")]
        public async Task<ActionResult<Project>> GetProject(Guid Id)
        {
           var project = await _context.Projects.FindAsync(Id);

           if(project == null){
            return NotFound();
           }

            return project;
        }


        //DELETE: api/Project/:id
        [HttpDelete("{id}")]
        public async Task<ActionResult<Project>> DeleteProject(Guid Id){
            var project = await _context.Projects.FindAsync(Id);

            if(project == null)
            {
                return NotFound();
            }

            _context.Projects.Remove(project);
            
            await _context.SaveChangesAsync();
            return project;
        }

        //POST: api/Project
        [HttpPost]
        public async Task<ActionResult<Project>> CreateProject(Project project){
            _context.Projects.Add(project);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetProject", new {Id= issue.Id}, project);
        }
    }
}
