import React, { useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";

const initialState = {
  task: "",
  hr: "",
};

export const InputForm = ({ addToList }) => {
  const [newInfo, setNewInfo] = useState(initialState);

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    console.log(name, value);

    setNewInfo({
      ...newInfo,
      [name]: value,
    });
    console.log(newInfo);
  };
  console.log(newInfo);

  const handleOnSubmit = (e) => {
    e.preventDefault();
    addToList(newInfo);
  };

  return (
    <div>
      <Form onSubmit={handleOnSubmit}>
        <Row className="g-3">
          <Col md={7}>
            <Form.Control
              name="task"
              placeholder="Task..."
              required
              onChange={handleOnChange}
            />
          </Col>

          <Col md={3}>
            <Form.Control
              name="hr"
              placeholder="hours"
              type="number"
              required
              onChange={handleOnChange}
            />
          </Col>

          <Col md={2}>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Col>
        </Row>
      </Form>
    </div>
  );
};
