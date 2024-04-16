import { Draggable } from "react-beautiful-dnd";
import "../index.css";

const TaskCard = ({ id, title, description, index, dueDate }) => {
  const displayDate = new Date(dueDate).toDateString();
  return (
    <Draggable draggableId={id.toString()} index={index}>
      {(provided, snapshot) => (
        <div
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          className={`taskCard ${snapshot.isDragging ? "is-dragging" : ""}`}
        >
          <h3>{title}</h3> {/* Display the task title */}
          <p>{description}</p> {/* Display the task description */}
          <p className="dueDate">Completion date: {displayDate}</p>
        </div>
      )}
    </Draggable>
  );
};

export default TaskCard;
