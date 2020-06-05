import React, { createContext, useState, useEffect } from 'react';

export const ProjectContext = createContext();

const ProjectProvider = ({ children }) => {
  const [projects, setProjects] = useState([]);
  const [issues, setIssues] = useState([]);

  async function fetchProjects() {
    const response = await fetch('api/project');
    const data = await response.json();
    setProjects(data);
  }

  async function addProject(dataToSend) {
    const response = await fetch('api/project', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(dataToSend),
    });
    const data = await response.json();

    setProjects((projects) => [...projects, data]);
  }

  async function fetchIssues(issueId) {
    const response = await fetch(`api/issue/${issueId}`);
    const data = await response.json();
    setIssues(data);
  }

  async function addIssue() {}
  async function deleteIssue(issueId) {
    setIssues();
  }

  async function editIssue(issueId) {
    setIssues();
  }

  useEffect(() => {
    fetchProjects();
  }, []);

  return (
    <ProjectContext.Provider
      value={{
        projects,
        addProject,
        issues,
        fetchIssues,
        deleteIssue,
        editIssue,
      }}
    >
      {children}
    </ProjectContext.Provider>
  );
};

export default ProjectProvider;
