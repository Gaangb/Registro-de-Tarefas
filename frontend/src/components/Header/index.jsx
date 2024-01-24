import { useCustomer } from "../../hooks/CustomerHooks";
import { VscAdd } from "react-icons/vsc";

import FormTask from "../FormTask";
import "./style.css";

export default function Header() {
  const {
    setShowFormTask,
    showformTask,
  } = useCustomer();

  function onButtonClick() {
    setShowFormTask(true);
  }

  return (
    <div>
      {showformTask ? <FormTask /> : null}
      <div className="container_header">
        <p>Meu quadro de tarefas</p>
        <button onClick={onButtonClick}>
          <VscAdd />
        </button>
      </div>
    </div>
  );
}
