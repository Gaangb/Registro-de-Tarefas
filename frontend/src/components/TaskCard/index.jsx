import { VscEdit, VscTrash } from "react-icons/vsc";
import { useCustomer } from "../../hooks/CustomerHooks";
import "./style.css";

export default function TaskCard({
  id,
  title,
  taskDescription,
  taskDate,
  taskStatus,
}) {

  const {
    tasks,
    setShowFormTask,
    setCurrentTask,
    setTasks,
  } = useCustomer();

  function handleEdit(id) {
    setShowFormTask(true);
    const editedTask = tasks.find((task) => task.id === id);
    setCurrentTask({
      id: editedTask.id,
      title: editedTask.title,
      description: editedTask.description,
      date: editedTask.date,
      status: editedTask.status,
    });
  }

  function handleDelete(id) {
    const updateTask = tasks.filter((task) => task.id !== id);
    setTasks(updateTask);
  }

  return (
    <div className="container_card">
      <div className="container_card_title">
        <p>{title}</p>
        <div className="container_card_buttons">
          <button onClick={() => handleEdit(id)}>
            <VscEdit />
          </button>
          <button onClick={() => handleDelete(id)}>
            <VscTrash />
          </button>
        </div>
      </div>
      <div className="container_card_texts">
        <div className="container_card_description">
          <p>{taskDescription}</p>
        </div>
        <div className="container_card_date">
          <p>{taskDate}</p>
        </div>
      </div>
    </div>
  );
}
