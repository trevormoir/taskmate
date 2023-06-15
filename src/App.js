import { useEffect, useState } from 'react';

import { Header } from './components/Header';
import { AddTask } from './components/AddTask';
import { ShowTask } from './components/ShowTask';

import './App.css';

function App() {
  // const [tasklist, setTasklist] = useState([
  //   {id: 10001, name: "TASK A", time: "2:09:01 AM 9/14/2030"},
  //   {id: 10002, name: "TASK B", time: "2:09:01 AM 9/14/2030"},
  //   {id: 10003, name: "TASK C", time: "2:09:01 AM 9/14/2030"}
  // ]);
  const [tasklist, setTasklist] = useState(JSON.parse(localStorage.getItem("tasklist")) || []);
  const [task, setTask] = useState({});

  useEffect(() => { //evaluates only once!
      localStorage.setItem("tasklist", JSON.stringify(tasklist))
    },
    [tasklist]); //runs everytime tasklist is updated

  return (
    <div className="App">
      <Header />
      <AddTask tasklist={tasklist} setTasklist={setTasklist} task={task} setTask={setTask} />
      <ShowTask tasklist={tasklist} setTasklist={setTasklist} task={task} setTask={setTask} />
    </div>
  );
}

export default App;
