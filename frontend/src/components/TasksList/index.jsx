import { memo } from "react";
import TaskCard from "../TaskCard";
import "./style.css";

function TasksList({
  tasks,
  setShowFormTask,
  setCurrentTask,
  setTasks,
  getTaskById,
  deleteTaskById,
}) {

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
        {["pendente", "executando", "concluida"].map((statusTarefa) => (
          <div key={statusTarefa}>
            <div className="top_list_render">
              {tasks
                ?.filter((note) => note.status_tarefa === statusTarefa)
                .map((note) => (
                  <div key={note.id}>
                    <TaskCard
                      note={note}
                      tasks={tasks}
                      setShowFormTask={setShowFormTask}
                      setCurrentTask={setCurrentTask}
                      setTasks={setTasks}
                      getTaskById={getTaskById}
                      deleteTaskById={deleteTaskById}
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

export default memo(TasksList);