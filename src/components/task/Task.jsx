import { useGlobalContext } from "../../context/TasksContext";

export const Task = (props) => {
  const { removeTask } = useGlobalContext();

  return (
    <li className="list-group-item">
      {props.title}:{props.description}
      <button
        className="btn btn-danger"
        onClick={() => {
          removeTask(props.id);
        }}
      >
        Salinti
      </button>
    </li>
  );
};
