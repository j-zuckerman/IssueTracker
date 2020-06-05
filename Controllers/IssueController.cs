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
    public class IssueController : ControllerBase
    {
        private readonly ApplicationDbContext _context;

        public IssueController(ApplicationDbContext context){
            _context = context;
        }


         // GET: api/Issue/:id
        [HttpGet("{id}")]
        public async Task<ActionResult<IEnumerable<Issue>>> GetIssues(Guid Id)
        {
           var issues = await _context.Issues.Where(x => x.ProjectId == Id).ToListAsync();

           if(issues == null){
            return NotFound();
           }

            return issues;
        }

        // //PUT: api/Issue/:id
        // [HttpPut("{id}")]
        // public async Task<ActionResult<Issue>> EditIssue(Guid Id, Issue issue)
        // {
        //     if(Id != issue.Id)
        //     {
        //         return BadRequest();
        //     }

        //     _context.Entry(issue).State = EntityState.Modified;

        //     await _context.SaveChangesAsync();
    
        // }

        //DELETE: api/Issue/:id
        [HttpDelete("{id}")]
        public async Task<ActionResult<Issue>> DeleteIssue(Guid Id){
            var issue = await _context.Issues.FindAsync(Id);

            if(issue == null)
            {
                return NotFound();
            }

            _context.Issues.Remove(issue);
            
            await _context.SaveChangesAsync();
            return issue;
        }

        //POST: api/Issue
        [HttpPost]
        public async Task<ActionResult<Issue>> PostIssue(Issue issue, Guid Id){
            issue.ProjectId = Id;
            _context.Issues.Add(issue);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetIssue", new {Id= issue.Id}, issue);
        }
    }
}
