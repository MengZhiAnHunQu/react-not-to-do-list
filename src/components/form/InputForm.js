import React, { useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";

const initialState = {
  task: "",
  hr: "",
};

export const InputForm = ({ addToTaskList }) => {
  const [newInfo, setNewInfo] = useState(initialState);

  const handleOnChange = (e) => {
    const { value, name } = e.target;

    setNewInfo({
      ...newInfo,
      [name]: value,
    });
    // console.log(newInfo);

    //.console.log(`name is ${name}, value is ${value}`);
    // console.log(e);
  };

  //console.log(newInfo);

  const handleOnSubmit = (e) => {
    e.preventDefault();
    console.log(newInfo);
    addToTaskList(newInfo);
  };

  return (
    <div>
      {newInfo.task}
      <Form onSubmit={handleOnSubmit}>
        <Row className="g-3">
          <Col md={7}>
            <Form.Control
              name="task"
              placeholder="Task..."
              onChange={handleOnChange}
              required
            />
          </Col>

          <Col md={3}>
            <Form.Control
              name="hr"
              placeholder="hours"
              type="number"
              onChange={handleOnChange}
              required
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
