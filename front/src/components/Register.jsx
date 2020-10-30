import React from "react";
import { Form, Button, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

export default ({ handleEmail, handleSubmit, handlePassword, error }) => (
  <div>
    <hr/>
    <Container>
      <Form style={{ color: "white" }} onSubmit={handleSubmit}>
        <Form.Group controlId="formBasicEmail">
          <h2> Register Here! </h2>
          <Form.Label>Email </Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            onChange={handleEmail}
          />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            onChange={handlePassword}
          />
          
        </Form.Group>
        <Form.Group controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="I accept the Terms of Service" />
        </Form.Group>

        <Button variant="warning" type="submit">
          Submit
        </Button>
      </Form>
    </Container>

    <hr />
  </div>
);
