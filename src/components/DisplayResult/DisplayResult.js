import React from "react";
import { Card } from "react-bootstrap";

export function DisplayResult(props) {
  return (
    <div>
      <Card style={{ width: "18rem" }}>
        <Card.Body>
          <Card.Title>
            <b>{props.title}</b>
          </Card.Title>
          <Card.Text>{props.value}</Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
}
