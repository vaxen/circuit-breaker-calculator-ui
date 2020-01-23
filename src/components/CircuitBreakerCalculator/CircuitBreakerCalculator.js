import React, { useState } from "react";
import { Form, Container, Button } from "react-bootstrap";
import { XML_BOXES, WEB_BOXES, JSON_BOXES } from "../../const/boxes-config";
import { DisplayResult } from "../DisplayResult/DisplayResult";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";

export function CircuitBreakerCalculator() {
  const [rateTimeOut, setRateTimeOut] = useState();
  const [jsonRequests, setJsonRequests] = useState();
  const [xmlRequests, setXmlRequests] = useState();
  const [webRequests, setWebRequests] = useState();

  const getPoolSizeByNumberOfBoxes = (requestPerHour, numberOfBoxes) => {
    const result = Math.ceil(
      (requestPerHour / 60 / 60) / numberOfBoxes * 2) * rateTimeOut
    ;
    return result;
  };

  const onClear = () => {
    setRateTimeOut();
    setXmlRequests();
    setWebRequests();
    setJsonRequests();
  };

  var jsonPoolSize = rateTimeOut && jsonRequests && (
    <DisplayResult
      title="JSON"
      value={getPoolSizeByNumberOfBoxes(jsonRequests, JSON_BOXES)}
    />
  );
  var xmlPoolSize = rateTimeOut && xmlRequests && (
    <DisplayResult
      title="XML"
      value={getPoolSizeByNumberOfBoxes(xmlRequests, XML_BOXES)}
    />
  );
  var webPoolSize = rateTimeOut && webRequests && (
    <DisplayResult
      title="WEB"
      value={getPoolSizeByNumberOfBoxes(webRequests, WEB_BOXES)}
    />
  );

  return (
    <div className="container">
      <h1>Circuit Breaker Calculator </h1>
      <Form>
        <Form.Group controlId="formRateTimeout">
          <Form.Control
            type="number"
            placeholder="rate_timeout from se manager"
            value={rateTimeOut}
            onChange={event => setRateTimeOut(event.target.value)}
          />
        </Form.Group>
        <Form.Group controlId="formJsonRequest">
          <Form.Control
            type="number"
            placeholder="json request per hours"
            value={jsonRequests}
            onChange={event => setJsonRequests(event.target.value)}
          />
        </Form.Group>
        <Form.Group controlId="formXmlRequest">
          <Form.Control
            type="number"
            placeholder="xml request per hours"
            value={xmlRequests}
            onChange={event => setXmlRequests(event.target.value)}
          />
        </Form.Group>
        <Form.Group controlId="formWebRequest">
          <Form.Control
            type="number"
            placeholder="web request per hours"
            value={webRequests}
            onChange={event => setWebRequests(event.target.value)}
          />
        </Form.Group>
        <Form.Group controlId="clear">
          <Button
            variant="danger"
            onClick={() => window.location.reload(false)}
          >
            Clear
          </Button>
        </Form.Group>
      </Form>
      <Container>
        <Row>
          <Col>{jsonPoolSize}</Col>
          <Col>{xmlPoolSize}</Col>
          <Col>{webPoolSize}</Col>
        </Row>
      </Container>
    </div>
  );
}
