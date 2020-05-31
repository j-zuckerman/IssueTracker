using System;

namespace issueTracker.Models
{
    public class Project
    {
        public Guid Id { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
        public DateTime DateCreated {get; set;}
        public DateTime Deadline {get; set;}
        public string Creator {get; set;}

    }
}