import { memo, useEffect, useState } from "react";
import { VscEdit, VscTrash } from "react-icons/vsc";
import "./style.css";

function TaskCard({ getTaskById, deleteTaskById, note, setShowFormTask }) {
  const [customClass, setCustomClass] = useState("");

  function changeStatusTarefa() {
    if (note.status_tarefa === "pendente") {
      setCustomClass("container_card_title_pendente");
    } else if (note.status_tarefa === "executando") {
      setCustomClass("container_card_title_executando");
    } else if (note.status_tarefa === "concluida") {
      setCustomClass("container_card_title_concluida");
    }
  }
  const getTask = (id) => {
    setShowFormTask(true);
    getTaskById(id);
  };

  useEffect(() => {
    changeStatusTarefa();
  }, []);

  return (
    <div className={customClass + " container_card"}>
      <div className="container_card_title">
        <p>{note.titulo_tarefa}</p>
        <div className="container_card_buttons">
          <button onClick={() => getTask(note.id)}>
            <VscEdit />
          </button>
          <button onClick={() => deleteTaskById(note.id)}>
            <VscTrash />
          </button>
        </div>
      </div>
      <div className="container_card_texts">
        <div className="container_card_description">
          <p>{note.descricao_tarefa}</p>
        </div>
        <div className="container_card_date">
          <p>{note.data_tarefa}</p>
        </div>
      </div>
    </div>
  );
}

export default memo(TaskCard);
