import {
  createContext,
  useContext,
  useState,
  useEffect,
  useMemo,
} from "react";
import { format, parse } from "date-fns";
import axios from "axios";

const CustomerContext = createContext();

export function CustomerProvider({ children }) {
  const [tasks, setTasks] = useState([]);
  const [showformTask, setShowFormTask] = useState(false);
  const [currentTask, setCurrentTask] = useState({
    id: 0,
    titulo_tarefa: "",
    descricao_tarefa: "",
    data_tarefa: "",
    status_tarefa: "",
  });

  const fetchTasks = async () => {
    try {
      const response = await axios.get("http://127.0.0.1:5000/get_tasks");
      setTasks(response.data);
    } catch (error) {
      console.error("Erro ao buscar dados da API:", error);
    }
  };

  useEffect(() => {
    fetchTasks();
  }, [setTasks]);

  const updateTask = async (task) => {
    try {
      await axios.put(
        `http://127.0.0.1:5000/update_task/${task.id}`,
        {
          titulo_tarefa: task.titulo_tarefa,
          descricao_tarefa: task.descricao_tarefa,
          data_tarefa: task.data_tarefa,
          status_tarefa: task.status_tarefa,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        },
      );
    } catch (error) {
      console.error("Erro ao atualizar dados da API:", error);
    }
  };

  const getTaskById = async (id) => {
    try {
      const response = await axios.get(
        `http://127.0.0.1:5000/get_task_by_id/${id}`
      );

      const formattedDate = format(parse(response.data.data_tarefa, "dd-MM-yyyy", new Date()), "yyyy-MM-dd");

      setCurrentTask({
        id: response.data.id,
        titulo_tarefa: response.data.titulo_tarefa,
        descricao_tarefa: response.data.descricao_tarefa,
        data_tarefa: formattedDate,
        status_tarefa: response.data.status_tarefa,
      });
    } catch (error) {
      console.error("Erro ao atualizar dados da API:", error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://127.0.0.1:5000/delete_task/${id}`);
    } catch (error) {
      console.error("Erro ao atualizar dados da API:", error);
    }
  }

  const deleteTaskById = (id) => {
    const updatedTasks = tasks.filter((task) => task.id !== id);
    setTasks(updatedTasks);
    handleDelete(id);
  }

  const addTask = async (task) => {
    try {
      const response = await axios.post(
        "http://127.0.0.1:5000/add_task",
        task,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      setTasks((prevTasks) => [...prevTasks, response.data]);
    } catch (error) {
      console.error("Erro ao atualizar dados da API:", error);
    }
  }

  const value = useMemo(
    () => ({
      showformTask,
      currentTask,
      tasks,
      updateTask,
      addTask,
      getTaskById,
      deleteTaskById,
      setShowFormTask,
      setCurrentTask,
      setTasks,
    }),
    [
      showformTask,
      currentTask,
      tasks,
      addTask,
      setShowFormTask,
      setCurrentTask,
      setTasks,
    ]
  );

  return (
    <CustomerContext.Provider value={value}>
      {children}
    </CustomerContext.Provider>
  );
}

export function useCustomer() {
  const context = useContext(CustomerContext);

  if (!context) {
    throw new Error("useCustomer must be used within an ExpenseProvider");
  }

  return context;
}
