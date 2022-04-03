import "./App.css";
import { InputForm } from "./components/form/InputForm";
import { Title } from "./components/title/Title";
import { Col, Container, Row } from "react-bootstrap";
import { TaskList } from "./components/task-list/TaskList";
import { useState } from "react";
import { BadList } from "./components/task-list/BadList";

const App = () => {
  const [taskList, setTaskList] = useState([]);

  const addToList = (taskObj) => {
    console.log(taskObj);
    setTaskList([...taskList, taskObj]);
  };
  console.log(taskList);

  return (
    <div className="wrapper">
      <Container>
        <Title />
        <InputForm addToList={addToList} />
        <hr />
        <Row>
          <Col md="6">
            <TaskList taskList={taskList} />
          </Col>

          <Col md="6">
            <BadList />
          </Col>
        </Row>
        {/* Task list components */}
        <Row>
          <Col>
            <h3 className="mt-5 bg-light">
              {" "}
              The total allocated hours is 15hrs
            </h3>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default App;

//1. function 1 , get the form data and store in local state on input field changed
//2. in the form submit, send the task data to the parent component to put in the task
//3. send the task list arrary to TaskList components
//4. receive and loop the task array in the task list component.
