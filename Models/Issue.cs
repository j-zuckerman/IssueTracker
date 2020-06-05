using System;

namespace issueTracker.Models
{
    public class Issue
    {
        public Guid Id { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
        public string Assignee {get; set;}
        public DateTime DateCreated {get; set;}
        public DateTime Deadline {get; set;}
        public string Status {get; set;}
        public Guid ProjectId {get; set;}

    }
}