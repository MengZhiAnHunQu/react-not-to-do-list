import React from "react";
import { Form, Table, Button } from "react-bootstrap";

export const TaskList = ({ taskList, removeFromTaskList, shiftToBadList }) => {
  console.log(taskList);

  return (
    <div>
      <h2 className="text-center bg-warning">Task List</h2>
      <hr />
      <Table striped hover>
        <tbody>
          {taskList.map((item, i) => (
            <tr className="bg-light" key={i}>
              <td>
                <Form.Check type="checkbox" label="" />
              </td>

              <td className="fs-4"> {item.task} </td>
              <td className="fs-4">{item.hr} hr</td>
              <td className="text-end">
                <Button
                  variant="outline-danger"
                  onClick={() => {
                    if (
                      window.confirm(
                        "Are you sure you want to delete this task?"
                      )
                    )
                      return removeFromTaskList(i);
                  }}
                >
                  <i className="fa-solid fa-trash-can"></i>
                </Button>{" "}
                <Button
                  variant="outline-primary"
                  onClick={() => shiftToBadList(i)}
                >
                  <i className="fa-solid fa-arrow-right"></i>
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};
