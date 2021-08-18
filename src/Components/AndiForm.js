import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";

const AndiForm = () => {
  const [name, setName] = useState("");
  const [title, setTitle] = useState("");

  return (
    <div className="container">
      <Form className="container">
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" placeholder="John Smith" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>AND Title</Form.Label>
          <Form.Control type="text" placeholder="Karaoke King" />
        </Form.Group>
        <Button className="button" variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default AndiForm;
