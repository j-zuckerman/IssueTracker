import React from 'react';
import Form from 'react-bootstrap/Form';

export const EditProject = () => {
  return (
    <Form>
      <Form.Group controlId="formName">
        <Form.Label>Project Name</Form.Label>
        <Form.Control type="text" placeholder="Enter project name" />
      </Form.Group>

      <Form.Group controlId="formDescription">
        <Form.Label>Example textarea</Form.Label>
        <Form.Control as="textarea" rows="3" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
};
