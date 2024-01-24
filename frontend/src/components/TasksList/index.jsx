import { useEffect } from "react";
import { useCustomer } from "../../hooks/CustomerHooks";
import TaskCard from "../TaskCard";
import "./style.css";

export default function TasksList() {
  const { tasks, filteredTasks, isFiltered, setFilteredTasks } = useCustomer();

  useEffect(() => {
    if (!isFiltered) {
      setFilteredTasks(tasks);
    }
  }, [tasks, isFiltered, setFilteredTasks]);

  const renderTask = isFiltered ? filteredTasks || [] : tasks;

  return (
    <div className="container_list">
      <div className="top_list">
        <div>
          <p>Pendente</p>
        </div>
        <div>
          <p>Executando</p>
        </div>
        <div>
          <p>Concluído</p>
        </div>
      </div>
      <div className="task_list">
        {["Pendente", "Executando", "Concluída"].map((status) => (
          <div key={status}>
            <div className="top_list_render">
              {renderTask
                .filter((note) => note.status === status.toLowerCase())
                .map((note) => (
                  <div key={note.id}>
                    <TaskCard
                      id={note.id}
                      title={note.title}
                      taskDescription={note.description}
                      taskDate={note.date}
                    />
                  </div>
                ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
