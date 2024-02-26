const TaskCard = ({ title, description }) => {
  return (
    <div className="taskCard">
      <h3>{title}</h3> {/* Display the task title */}
      <p>{description}</p> {/* Display the task description */}
    </div>
  );
};

export default TaskCard;
