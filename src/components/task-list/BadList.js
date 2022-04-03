import React from "react";
import { Form, Table, Button } from "react-bootstrap";

export const BadList = () => {
  return (
    <div>
      <Table striped hover>
        <tbody>
          <h2 className="bg-danger">Bad List</h2>
          <hr />
          <tr className="bg-light">
            <td>
              <Form.Check type="checkbox" label="" />
            </td>

            <td>task</td>
            <td>hr</td>
            <td className="text-end">
              <Button variant="warning">
                <i className="fa-solid fa-trash-can"></i>
              </Button>{" "}
              <Button variant="primary">
                <i className="fa-solid fa-arrow-left"></i>
              </Button>
            </td>
          </tr>
        </tbody>
      </Table>

      <h4 className="mt-4 bg-primary text-light">
        Your could have saved: 20hrs
      </h4>
    </div>
  );
};
