import React from "react";
import Container from "../../components/Container";
import TasksList from "../../components/TasksList";
import Header from "../../components/Header";

export default function Home() {
  return (
    <Container customClass="customer_container container">
      <Header />
      <TasksList />
    </Container>
  );
}
