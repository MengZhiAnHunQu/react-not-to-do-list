import React from "react";
import { Col, Row, Table } from "react-bootstrap";
import { FormRow } from "../form/FormRow";

export const TaskList = ({ taskList }) => {
  console.log(taskList);

  return (
    <div>
      <Row>
        <Col md="6">
          <h2 className="text-center">Task List</h2>
          <hr />
          <Table striped hover>
            <tbody>
              <FormRow taskList={taskList} />
            </tbody>
          </Table>
        </Col>

        <Col md={6}>
          <h2 className="text-center">Bad List</h2>
        </Col>
      </Row>
    </div>
  );
};
