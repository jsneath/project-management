import Column from "./Column";
// import TaskCard from "./TaskCard";
import { DragDropContext } from "react-beautiful-dnd";
import { useState } from "react";
import AddTaskModal from "./modal";
import "../index.css";
import "react-datepicker/dist/react-datepicker.css";

const Board = () => {
  const [showModal, setShowModal] = useState(false);
  const [tasks, setTasks] = useState([]);

  const allColumns = ["To Do", "In Progress", "Done"];

  const deleteTask = (taskId) => {
    setTasks((currentTasks) =>
      currentTasks.filter((task) => task.id !== taskId)
    );
  };

  const editTask = (taskId, updatedTask) => {
    setTasks((currentTasks) =>
      currentTasks.map((task) =>
        task.id === taskId ? { ...task, ...updatedTask } : task
      )
    );
  };

  const handleOnDragEnd = (result) => {
    const { destination, source, draggableId } = result;

    if (!destination) {
      return; // Do nothing if dropped outside a column
    }

    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return; // Do nothing if the item is dropped in the same place as it started
    }

    const draggedTask = tasks.find((task) => task.id === parseInt(draggableId));

    // Create a new array of tasks without the dragged task
    let newTasks = tasks.filter((task) => task.id !== parseInt(draggableId));

    // If moving within the same column, simply reorder
    if (destination.droppableId === source.droppableId) {
      newTasks.splice(destination.index, 0, draggedTask);
    } else {
      // If moving to a different column, update the task's column and then reorder
      const updatedTask = { ...draggedTask, column: destination.droppableId };
      newTasks.splice(destination.index, 0, updatedTask);
    }

    setTasks(newTasks);

    // Logic to reorder tasks or move them between columns
    // This will depend on how your tasks and columns are structured
  };

  // const addTask = (newTask) => {
  //   setTasks([...tasks, newTask]);
  // };

  // Example function to remove a task (this also uses setTasks)
  // const removeTask = (taskId) => {
  //   setTasks(tasks.filter((task) => task.id !== taskId));
  // };

  const handleAddTask = (newTask) => {
    newTask.id = tasks.length + 1; // Simple id generation
    newTask.column = "To Do"; // Default column
    setTasks([...tasks, newTask]);
    setShowModal(false);
  };

  return (
    <DragDropContext onDragEnd={handleOnDragEnd}>
      <button className="newTaskButton" onClick={() => setShowModal(true)}>
        Create new task
      </button>
      <AddTaskModal
        show={showModal}
        handleClose={() => setShowModal(false)}
        handleSubmit={handleAddTask}
      />
      <div className="board">
        {/* Render columns based on task data */}
        {allColumns.map((columnName) => (
          <Column
            key={columnName}
            name={columnName}
            tasks={tasks.filter((task) => task.column === columnName)}
            columnId={columnName}
            deleteTask={deleteTask}
            editTask={editTask}
          />
        ))}
      </div>
    </DragDropContext>
  );
};

export default Board;
