import "./App.css";
import { InputForm } from "./components/form/InputForm";
import { Title } from "./components/title/Title";
import { Container } from "react-bootstrap";
import { TaskList } from "./components/task-list/TaskList";
import { useState } from "react";

const App = () => {
  const [taskList, setTaskList] = useState([]);

  //state to store all the task lists
  const addToTaskList = (taskObj) => {
    setTaskList([...taskList, taskObj]);
    //console.log(taskObj);
    // console.log(taskList);
  };
  console.log(taskList);

  return (
    <div className="wrapper">
      <Container>
        <Title />
        <InputForm addToTaskList={addToTaskList} />
        <hr />
        {/* Task list components */}
        <TaskList taskList={taskList} />
      </Container>
    </div>
  );
};

export default App;

//1. function 1 , get the form data and store in local state on input field changed
//2. in the form submit, send the task data to the parent component to put in the task
//3. send the task list arrary to TaskList components
//4. receive and loop the task array in the task list component.
