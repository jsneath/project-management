import React, { useState } from "react";
import { Draggable } from "react-beautiful-dnd";
import "../index.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css"; // Import the CSS for react-datepicker

const TaskCard = ({
  id,
  title,
  description,
  index,
  dueDate,
  onDelete,
  onEdit,
}) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedTitle, setEditedTitle] = useState(title);
  const [editedDescription, setEditedDescription] = useState(description);
  const [editedDueDate, setEditedDueDate] = useState(dueDate);

  const handleEdit = () => {
    onEdit(id, {
      title: editedTitle,
      description: editedDescription,
      dueDate: editedDueDate.toISOString(),
    });
    setIsEditing(false); // Exit edit mode after saving
  };

  const handleToggleEdit = () => {
    setIsEditing(!isEditing); // Toggle edit mode
  };

  if (isEditing) {
    return (
      <div>
        <input
          value={editedTitle}
          onChange={(e) => setEditedTitle(e.target.value)}
        />
        <textarea
          value={editedDescription}
          onChange={(e) => setEditedDescription(e.target.value)}
        />
        <DatePicker
          selected={editedDueDate}
          onChange={(date) => setEditedDueDate(date)}
        />
        <button onClick={handleEdit}>Save</button>
        <button onClick={handleToggleEdit}>Cancel</button>
      </div>
    );
  }

  const handleDelete = () => {
    onDelete(id);
  };

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
          <p className="dueDate">Due by: {displayDate}</p>
          <button className="editButton" onClick={handleToggleEdit}>
            <i className="fas fa-edit" style={{ color: "yellow" }}></i>
          </button>
          <button className="deleteButton" onClick={handleDelete}>
            <i className="fas fa-trash" style={{ color: "yellow" }}></i>
          </button>
        </div>
      )}
    </Draggable>
  );
};

export default TaskCard;
