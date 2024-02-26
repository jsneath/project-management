// import React from "react";
import PropTypes from "prop-types";
import TaskCard from "./TaskCard";

const Column = ({ name, tasks }) => {
  return (
    <div className="column">
      <h2>{name}</h2>
      {/* Render TaskCards here */}
      {tasks.map((task) => (
        <TaskCard
          key={task.id}
          title={task.title}
          description={task.description}
        />
      ))}
    </div>
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
