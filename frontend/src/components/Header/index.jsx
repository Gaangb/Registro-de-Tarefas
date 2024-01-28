import { VscAdd } from "react-icons/vsc";

import FormTask from "../FormTask";
import "./style.css";

export default function Header({
  setShowFormTask,
  showformTask,
  currentTask,
  tasks,
  setCurrentTask,
  setTasks,
  updateTask,
  addTask,
  // setNewId,
}) {

  function onButtonClick() {
    setShowFormTask(true);
  }

  return (
    <div>
      {showformTask ? (
        <FormTask
          currentTask={currentTask}
          tasks={tasks}
          setShowFormTask={setShowFormTask}
          setCurrentTask={setCurrentTask}
          setTasks={setTasks}
          updateTask={updateTask}
          addTask={addTask}
        />
      ) : null}
      <div className="container_header">
        <p>Meu quadro de tarefas</p>
        <button onClick={onButtonClick}>
          <VscAdd />
        </button>
      </div>
    </div>
  );
}
