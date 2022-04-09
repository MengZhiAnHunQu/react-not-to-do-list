import "./App.css";
import { InputForm } from "./components/form/InputForm";
import { Title } from "./components/title/Title";
import { Col, Container, Row } from "react-bootstrap";
import { TaskList } from "./components/task-list/TaskList";
import { useState } from "react";
import { BadList } from "./components/task-list/BadList";

const weeklyHrs = 24 * 7;

const App = () => {
  const [taskList, setTaskList] = useState([]);
  const [badList, setBadList] = useState([]);

  // console.log(taskList);

  //remove item from the task list
  const removeFromTaskList = (i) => {
    const filteredArg = taskList.filter((item, index) => index !== i);
    // console.log(filteredArg);
    setTaskList(filteredArg);
  };

  const removeFromBadList = (i) => {
    const filteredArg = badList.filter((item, index) => index !== i);

    setBadList(filteredArg);
  };

  const shiftToBadList = (i) => {
    //get the item that to be shifted
    //add the item in the bad list
    //remove the item the task lsit
    const item = taskList[i];
    // setTaskList(item);
    setBadList([...badList, item]);
    removeFromTaskList(i);
  };

  const shiftToTaskList = (i) => {
    //get the item
    const item = badList[i];
    //
    setTaskList([...taskList, item]);
    removeFromBadList(i);
  };

  const taskListTotalHr = taskList.reduce(
    (accumulation, item) => accumulation + +item.hr,
    0
  );
  const badListTotalHr = badList.reduce(
    (accumulation, item) => accumulation + +item.hr,
    0
  );

  const ttlHrs = taskListTotalHr + badListTotalHr;

  const addToTaskList = (newInfo) => {
    if (ttlHrs + +newInfo.hr <= weeklyHrs) {
      setTaskList([...taskList, newInfo]);
    } else {
      alert("You have exceeded the weekyly limit of " + weeklyHrs + "hrs");
    }
  };

  return (
    <div className="wrapper">
      <Container>
        <Title />
        <InputForm addToTaskList={addToTaskList} />
        <hr />
        <Row>
          <Col md="6">
            <TaskList
              taskList={taskList}
              removeFromTaskList={removeFromTaskList}
              shiftToBadList={shiftToBadList}
            />
          </Col>

          <Col md="6">
            <BadList
              badList={badList}
              removeFromBadList={removeFromBadList}
              shiftToTaskList={shiftToTaskList}
              badListTotalHr={badListTotalHr}
            />
          </Col>
        </Row>
        {/* Task list components */}
        <Row>
          <Col>
            <h3 className="mt-5 bg-light">
              {" "}
              The total allocated hours is {ttlHrs}
              hrs
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

//feature:
//1. delete on click delete button
//2. switch task to bad list when you click on the arrow button
//3. delete from the bad list
//4. switch bad list item to task list when you click on let pointing arrow in the bad list

//5. show the  total allocated hours in the app comp
//6. show the total hours that could have been saved in the bad list comp.

//7. make sure user can not add task that exceeds the total weekly hours 168hrs
//8. make the check box to be checked out.
//9. local storage***
