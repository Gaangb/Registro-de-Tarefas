import { useParams } from "react-router-dom";

import { useCustomer } from "../../hooks/CustomerHooks";
import Button from "../Button";
import Container from "../Container";
import Input from "../Input";
import "./style.css";

export default function FormTask() {
  const {
    currentTask,
    tasks,
    setShowFormTask,
    setCurrentTask,
    setTasks,
    setNewId,
  } = useCustomer();

  let { id } = useParams();

  const valuesNotSet =
    !currentTask.title ||
    !currentTask.status ||
    !currentTask.date ||
    !currentTask.description;

  function onCancelButtonClick() {
    setShowFormTask(false);
    setCurrentTask({
      title: "",
      status: null,
      date: "",
      description: "",
    });
  }

  function onConfirmClick() {
    if (valuesNotSet) {
      setShowFormTask(true);
      if (!currentTask.title) {
        alert("Digite um títule");
      } else if (!currentTask.status) {
        alert("Escolha um status");
      } else if (!currentTask.date) {
        alert("Selecione uma data");
      } else if (!currentTask.description) {
        alert("Insira uma descrição");
      }
    } else {
      if (currentTask.id) {
        const updatedTasks = tasks.map((task) =>
          task.id === currentTask.id ? { ...currentTask } : task
        );
        setTasks(updatedTasks);
        setShowFormTask(false);
      } else {
        const newTaskId = Date.now();

        setShowFormTask(false);
        setTasks([...tasks, { ...currentTask, id: newTaskId }]);
        setNewId(newTaskId + 1);
      }

      setCurrentTask({
        title: "",
        date: "",
        description: "",
        status: ""
      });
    }
  }

  function handleInputChange(event) {
    const { name, value, type } = event.target;

    if (type === "radio") {
      setCurrentTask({
        ...currentTask,
        [name]: value,
      });
    } else {
      setCurrentTask({
        ...currentTask,
        [name]: value,
      });
    }
  }

  return (
    <Container customClass="form_container">
      <div className="form_search">
        <Input
          name="title"
          type="text"
          maxLength={15}
          customClass="search form_input"
          placeholder="Adicione um título"
          value={currentTask.title}
          onChange={handleInputChange}
        />
      </div>
      <div className="form_search">
        <Input
          name="date"
          type="date"
          maxLength={15}
          customClass="search form_input"
          placeholder="Digite quando aconteceu"
          value={currentTask.date}
          onChange={handleInputChange}
        />
      </div>
      <div className="form_search">
        <Input
          name="description"
          type="text"
          maxLength={100}
          customClass="search form_input"
          placeholder="Descrição"
          value={currentTask.description}
          onChange={handleInputChange}
        />
      </div>
      <div className="radio_group">
        <label>Status:</label>
        <div>
          <input
            type="radio"
            name="status"
            value="pendente"
            checked={currentTask.status === "pendente"}
            onChange={handleInputChange}
          />
          <label htmlFor="pendente">Pendente</label>
        </div>
        <div>
          <input
            type="radio"
            name="status"
            value="executando"
            checked={currentTask.status === "executando"}
            onChange={handleInputChange}
          />
          <label htmlFor="executando">Executando</label>
        </div>
        <div>
          <input
            type="radio"
            name="status"
            value="concluída"
            checked={currentTask.status === "concluída"}
            onChange={handleInputChange}
          />
          <label htmlFor="concluída">Concluída</label>
        </div>
      </div>
      <div className="form_container_button">
        <Button
          text="Cancelar"
          customClass="form_button"
          onClick={onCancelButtonClick}
        />
        <Button
          text="Confirmar"
          customClass="form_button"
          onClick={onConfirmClick}
        />
      </div>
    </Container>
  );
}
