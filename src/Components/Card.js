import React from "react";
import { Card, Button } from "react-bootstrap";

const card = (props) => {
  return (
    <Card className="card">
      <Card.Body>
        <Card.Title>{props.name}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">{props.title}</Card.Subtitle>
        {/* <Card.Text>
        Some quick example text to build on the card title and make up the bulk of
        the card's content.
      </Card.Text> */}
        {/* <Button variant="primary">Go somewhere</Button> */}
      </Card.Body>
    </Card>
  );
};

export default card;
