import React from "react";
import { useCustomer } from "../../hooks/CustomerHooks";
import Container from "../../components/Container";
import TasksList from "../../components/TasksList";
import Header from "../../components/Header";

export default function Home() {
  const {
    showformTask,
    tasks,
    deleteTaskById,
    getTaskById,
    updateTask,
    currentTask,
    isFiltered,
    setShowFormTask,
    setCurrentTask,
    setTasks,
    addTask,
  } = useCustomer();

  return (
    <Container customClass={`customer_container container ${showformTask ? "modal-open" : ""}`}>
      <Header 
        setShowFormTask={setShowFormTask}
        showformTask={showformTask}
        currentTask={currentTask}
        tasks={tasks}
        setCurrentTask={setCurrentTask}
        setTasks={setTasks}
        updateTask={updateTask}
        addTask={addTask}
      />
      <TasksList 
        tasks={tasks}
        deleteTaskById={deleteTaskById}
        getTaskById={getTaskById}
        isFiltered={isFiltered}
        setShowFormTask={setShowFormTask}
        setCurrentTask={setCurrentTask}
        setTasks={setTasks}
      />
    </Container>
  );
}
