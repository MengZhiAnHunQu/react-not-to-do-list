import React from "react";
import { Form, Table, Button } from "react-bootstrap";

export const BadList = ({
  badList,
  removeFromBadList,
  shiftToTaskList,
  badListTotalHr,
}) => {
  console.log(badList);
  return (
    <div>
      <h2 className="text-center bg-danger">Bad List</h2>
      <hr />
      <Table striped hover>
        <tbody>
          {badList.map((item, i) => (
            <tr className="bg-light" key={i}>
              <td>
                <Form.Check type="checkbox" label="" />
              </td>

              <td className="fs-4"> {item.task} </td>
              <td className="fs-4">{item.hr} hr</td>
              <td className="text-end">
                <Button
                  variant="outline-danger"
                  onClick={() => removeFromBadList(i)}
                >
                  <i className="fa-solid fa-trash-can"></i>
                </Button>{" "}
                <Button
                  variant="outline-primary"
                  onClick={() => shiftToTaskList(i)}
                >
                  <i className="fa-solid fa-arrow-left"></i>
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

      <h4 className="mt-4 bg-light text-dark">
        Your could have saved: {badListTotalHr}hrs
      </h4>
    </div>
  );
};
