// import React from "react";
import PropTypes from "prop-types";
import TaskCard from "./TaskCard";
import { Droppable } from "react-beautiful-dnd";

const Column = ({ name, tasks, columnId }) => {
  return (
    <Droppable droppableId={columnId.toString()}>
      {(provided, snapshot) => (
        <div
          {...provided.droppableProps}
          ref={provided.innerRef}
          className="column"
        >
          <h2>{name}</h2>
          {/* Render TaskCards here */}
          {tasks.map((task, index) => (
            <TaskCard
              key={task.id}
              id={task.id}
              title={task.title}
              description={task.description}
              index={index}
            />
          ))}
        </div>
      )}
    </Droppable>
  );
};

Column.propTypes = {
  name: PropTypes.string.isRequired,
  tasks: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      // ...other task properties
    })
  ).isRequired,
};

export default Column;
