import React, { useState, useEffect } from "react";
import DatePicker from "react-datepicker";
import { Modal, Button } from "react-bootstrap";

const AddTaskModal = ({ show, handleClose, handleSubmit }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [dueDate, setDueDate] = useState(new Date());

  useEffect(() => {
    if (show) {
      setTitle("");
      setDescription("");
      setDueDate(new Date()); // You can set this to null or any default value you prefer
    }
  }, [show]);

  const submit = () => {
    if (title.trim() && description.trim()) {
      // Basic validation to ensure non-empty submissions
      handleSubmit({ title, description, dueDate });
      handleClose(); // This might already reset 'show', but we clear inputs explicitly above
    } else {
      alert("Please fill in all fields.");
    }
  };

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Add a New Task</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <form>
          <div className="form-group">
            <label>Title</label>
            <input
              type="text"
              className="form-control"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label>Description</label>
            <textarea
              className="form-control"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            ></textarea>
          </div>
          <div className="form-group">
            <label>Due Date</label>
            <DatePicker
              selected={dueDate}
              onChange={(date) => setDueDate(date)}
            />
          </div>
        </form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button variant="primary" onClick={submit}>
          Save Changes
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default AddTaskModal;
