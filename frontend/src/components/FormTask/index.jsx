import { format, parse } from "date-fns";

import Button from "../Button";
import Container from "../Container";
import Input from "../Input";
import "./style.css";

export default function FormTask({
  currentTask,
  tasks,
  setShowFormTask,
  setCurrentTask,
  setTasks,
  setNewId,
  updateTask,
  addTask,
}) {
  const valuesNotSet =
    !currentTask.titulo_tarefa ||
    !currentTask.status_tarefa ||
    !currentTask.data_tarefa ||
    !currentTask.descricao_tarefa;

  function onCancelButtonClick() {
    setShowFormTask(false);
    setCurrentTask({
      titulo_tarefa: "",
      status_tarefa: "",
      data_tarefa: "",
      descricao_tarefa: "",
    });
  }

  function onConfirmClick() {
    if (valuesNotSet) {
      setShowFormTask(true);
      if (!currentTask.titulo_tarefa) {
        alert("Digite um títule");
      } else if (!currentTask.status_tarefa) {
        alert("Escolha um status");
      } else if (!currentTask.data_tarefa) {
        alert("Selecione uma data");
      } else if (!currentTask.descricao_tarefa) {
        alert("Insira uma descrição");
      }
    } else {
      if (currentTask.id) {
        updateTask(currentTask);
        const updatedTasks = tasks.map((task) =>
          task.id === currentTask.id ? { ...currentTask } : task
        );
        setTasks(updatedTasks);
        setShowFormTask(false);
      } else {
        const dateObject = parse(currentTask.data_tarefa, 'yyyy-MM-dd', new Date());
        const formattedDate = format(dateObject, 'dd-MM-yyyy');
        const updatedTask = {
          ...currentTask,
          data_tarefa: formattedDate
        };
        addTask(updatedTask);
        setShowFormTask(false);
      }
      setCurrentTask({
        titulo_tarefa: "",
        data_tarefa: "",
        descricao_tarefa: "",
        status_tarefa: "",
      });
    }
  }

  const handleInputChangeItem = (event) => {
    console.log('event', event.target.value)
    const { name, value } = event.target;
    setCurrentTask({
      ...currentTask,
      [name]: value,
    });
  }

  return (
    <Container customClass="form_container">
      <div className="form_search">
        <Input
          name="titulo_tarefa"
          type="text"
          maxLength={15}
          customClass="search form_input"
          placeholder="Adicione um título"
          value={currentTask.titulo_tarefa}
          onChange={handleInputChangeItem}
        />
      </div>
      <div className="form_search">
        <Input
          name="data_tarefa"
          type="date"
          maxLength={15}
          customClass="search form_input"
          placeholder="Digite quando aconteceu"
          value={currentTask.data_tarefa}
          onChange={handleInputChangeItem}
        />
      </div>
      <div className="form_search">
        <Input
          name="descricao_tarefa"
          type="text"
          maxLength={100}
          customClass="search form_input"
          placeholder="Descrição"
          value={currentTask.descricao_tarefa}
          onChange={handleInputChangeItem}
        />
      </div>
      <div className="radio_group">
        <label>Status:</label>
        <div>
          <input
            type="radio"
            name="status_tarefa"
            value="pendente"
            checked={currentTask.status_tarefa.toLowerCase() === "pendente"}
            onChange={handleInputChangeItem}
          />
          <label htmlFor="pendente">Pendente</label>
        </div>
        <div>
          <input
            type="radio"
            name="status_tarefa"
            value="executando"
            checked={currentTask.status_tarefa.toLowerCase() === "executando"}
            onChange={handleInputChangeItem}
          />
          <label htmlFor="executando">Executando</label>
        </div>
        <div>
          <input
            type="radio"
            name="status_tarefa"
            value="concluida"
            checked={currentTask.status_tarefa.toLowerCase() === "concluida"}
            onChange={handleInputChangeItem}
          />
          <label htmlFor="concluida">Concluída</label>
        </div>
      </div>
      <div className="form_container_button">
        <Button
          text="Cancelar"
          customClass="form_button"
          onClick={onCancelButtonClick}
        />
        <Button
          text="Salvar"
          customClass="form_button"
          onClick={onConfirmClick}
        />
      </div>
    </Container>
  );
}
