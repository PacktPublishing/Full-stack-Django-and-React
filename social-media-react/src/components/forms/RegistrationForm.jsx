import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";

function RegistrationForm() {
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };

  return (
    <Form noValidate validated={validated} onSubmit={handleSubmit}>
      <Form.Group className="mb-3">
        <Form.Label>First Name</Form.Label>
        <Form.Control required type="text" placeholder="Enter first name" />
        <Form.Control.Feedback type="invalid">
          This file is required.
        </Form.Control.Feedback>
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Last name</Form.Label>
        <Form.Control required type="text" placeholder="Enter last name" />
        <Form.Control.Feedback type="invalid">
          This file is required.
        </Form.Control.Feedback>
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Username</Form.Label>
        <Form.Control required type="text" placeholder="Enter username" />
        <Form.Control.Feedback type="invalid">
          This file is required.
        </Form.Control.Feedback>
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Email address</Form.Label>
        <Form.Control required type="email" placeholder="Enter email" />
        <Form.Control.Feedback type="invalid">
          Please provide a valid email.
        </Form.Control.Feedback>
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Password</Form.Label>
        <Form.Control required type="password" placeholder="Password" />
        <Form.Control.Feedback type="invalid">
          Please provide a valid password.
        </Form.Control.Feedback>
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Bio</Form.Label>
        <Form.Control
          as="textarea"
          rows={3}
          placeholder="A simple bio ... (Optional)"
        />
      </Form.Group>

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}

export default RegistrationForm;
