import React from 'react';
import ProgressBar from 'react-bootstrap/ProgressBar';

export const Progress = ({ data }) => {
  const numOfOpenIssues = data.filter((issue) => issue.status === 'open')
    .length;

  const numOfInProgressIssues = data.filter(
    (issue) => issue.status === 'inProgress'
  ).length;

  const numOfClosedIssues = data.filter((issue) => issue.status === 'closed')
    .length;

  console.log(numOfClosedIssues);
  console.log(data.length);
  return (
    <ProgressBar>
      <ProgressBar
        variant="success"
        now={(numOfClosedIssues / data.length) * 100}
        key={1}
      />

      <ProgressBar
        variant="warning"
        now={(numOfInProgressIssues / data.length) * 100}
        key={2}
      />
      <ProgressBar
        variant="danger"
        now={(numOfOpenIssues / data.length) * 100}
        key={3}
      />
    </ProgressBar>
  );
};
