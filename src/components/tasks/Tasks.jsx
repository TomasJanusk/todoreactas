import { Task } from "../task/Task";
import AddTask from "../addTask/AddTask";
import { useGlobalContext } from "../../context/TasksContext";

export const Tasks = () => {
  const { tasks, isOpen, handleForm } = useGlobalContext();
  console.log(isOpen);
  return (
    <div className="container">
      <h2 className="m-5 text-center">Tasks list</h2>
      <div className="text-center m-5">
        {!isOpen && (
          <button
            className="btn btn-primary"
            onClick={() => {
              handleForm(true);
            }}
          >
            Add task
          </button>
        )}
      </div>
      {isOpen ? (
        <AddTask />
      ) : (
        <ul className="list-group">
          {tasks.length &&
            tasks.map((task, i) => (
              <Task
                key={i}
                id={task.id}
                title={task.title}
                description={task.description}
              />
            ))}
        </ul>
      )}
    </div>
  );
};
