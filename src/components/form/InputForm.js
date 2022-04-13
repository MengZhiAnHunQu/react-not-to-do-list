import React, { useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";

const initialState = {
  task: "",
  hr: "",
};

export const InputForm = ({ addToTaskList }) => {
  const [newInfo, setNewInfo] = useState(initialState);

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    console.log(name, value);

    setNewInfo({
      ...newInfo,
      [name]: value,
      // [name]:name==="hr"?+value:value
    });
    console.log(newInfo);
  };
  console.log(newInfo);

  const handleOnSubmit = (e) => {
    e.preventDefault();
    addToTaskList(newInfo);
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
            <Button variant="outline-light" type="submit">
              Submit
            </Button>
          </Col>
        </Row>
      </Form>
    </div>
  );
};
