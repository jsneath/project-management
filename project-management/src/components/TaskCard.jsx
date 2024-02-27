import { Draggable } from "react-beautiful-dnd";

const TaskCard = ({ id, title, description, index }) => {
  return (
    <Draggable draggableId={id.toString()} index={index}>
      {(provided, snapshot) => (
        <div
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          className="taskCard"
        >
          {console.log("Task ID:", id, "Draggable ID:", id.toString())}
          <h3>{title}</h3> {/* Display the task title */}
          <p>{description}</p> {/* Display the task description */}
        </div>
      )}
    </Draggable>
  );
};

export default TaskCard;
