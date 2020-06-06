import React, { createContext, useState, useEffect } from 'react';

export const ProjectContext = createContext();

const ProjectProvider = ({ children }) => {
  const [projects, setProjects] = useState([]);
  const [project, setProject] = useState([]);
  const [issues, setIssues] = useState([]);

  async function fetchProjects() {
    const response = await fetch('api/project');
    const data = await response.json();
    setProjects(data);
  }

  async function fetchProject(projectId) {
    const response = await fetch(`api/project/${projectId}`);
    const data = await response.json();
    setProject(data);
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

  async function deleteProject(projectId) {
    const response = await fetch(`api/project/${projectId}`, {
      method: 'DELETE',
    });
    const data = await response.json();
    console.log(data);
    setProjects(projects.filter((project) => project.id != projectId));
  }

  async function fetchIssues(projectId) {
    const response = await fetch(`api/issue/${projectId}`);
    const data = await response.json();
    setIssues(data);
  }

  async function addIssue(dataToSend) {
    const response = await fetch(`api/issue`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(dataToSend),
    });
    const data = await response.json();

    setIssues((issues) => [...issues, data]);
  }

  async function deleteIssue(issueId) {
    const response = await fetch(`api/issue/${issueId}`, {
      method: 'DELETE',
    });
    const data = await response.json();
    console.log(data);
    setIssues(issues.filter((issue) => issue.id != issueId));
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
        project,
        fetchProject,
        addProject,
        deleteProject,
        issues,
        fetchIssues,
        addIssue,
        deleteIssue,
        editIssue,
      }}
    >
      {children}
    </ProjectContext.Provider>
  );
};

export default ProjectProvider;
