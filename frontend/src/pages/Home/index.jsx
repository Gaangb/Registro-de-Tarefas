import React from "react";
import { useCustomer } from "../../hooks/CustomerHooks";
import Container from "../../components/Container";
import TasksList from "../../components/TasksList";
import Header from "../../components/Header";

export default function Home() {
  const {
    showformTask,
  } = useCustomer();
  return (
    <Container customClass={`customer_container container ${showformTask ? "modal-open" : ""}`}>
      <Header />
      <TasksList />
    </Container>
  );
}
