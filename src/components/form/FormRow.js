import React from "react";
import { Button, Form } from "react-bootstrap";

export const FormRow = ({ taskList }) => {
  console.log(taskList);
  return (
    <div>
      {taskList.map((str, index) => (
        <tr className="bg-light">
          <td>
            <Form.Check type="checkbox" label="" />
          </td>
          <td>{str[0]?.task} </td>

          <td>{str[0]?.hr}</td>
          <td className="text-end">
            <Button variant="danger">
              <i className="fa-solid fa-trash-can"></i>
            </Button>{" "}
            <Button variant="primary">
              <i className="fa-solid fa-arrow-right"></i>
            </Button>
          </td>
        </tr>
      ))}
    </div>
  );
};
