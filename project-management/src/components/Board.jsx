import Column from "./Column";
// import TaskCard from "./TaskCard";
import { useState } from "react";

const Board = () => {
  const [tasks] = useState([
    { id: 1, title: "Create UI Design", description: "...", column: "Done" },
    { id: 2, title: "add colour", description: "...", column: "Done" },
    { id: 3, title: "add colour", description: "...", column: "In Progress" },
  ]);

  const allColumns = ["To Do", "In Progress", "Done"];

  // const addTask = (newTask) => {
  //   setTasks([...tasks, newTask]);
  // };

  // Example function to remove a task (this also uses setTasks)
  // const removeTask = (taskId) => {
  //   setTasks(tasks.filter((task) => task.id !== taskId));
  // };

  return (
    <div className="board">
      {/* Render columns based on task data */}
      {allColumns.map((columnName) => (
        <Column
          key={columnName}
          name={columnName}
          tasks={tasks.filter((task) => task.column === columnName)}
        />
      ))}
    </div>
  );
};

export default Board;
