import { useState } from "react";

function Task({ title, onDelete, onEdit }) {
  const [isEditing, setIsEditing] = useState(false);
  const [updatedTask, setUpdatedTask] = useState(title);

  // Function to handle editing
  const handleEdit = () => {
    setIsEditing(true);
  };

  // Function to save the updated task
  const handleSave = () => {
    onEdit(updatedTask);
    setIsEditing(false);
  };

  return (
    <div className="task">
      {isEditing ? (
        <input
          type="text"
          value={updatedTask}
          onChange={(e) => setUpdatedTask(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleSave()} // Save on Enter
          autoFocus
        />
      ) : (
        <span className="task-text">{title}</span>
      )}

      <div className="task-buttons">
        {isEditing ? (
          <button className="save-btn" onClick={handleSave}>💾</button>
        ) : (
          <button className="edit-btn" onClick={handleEdit}>✏️</button>
        )}
        <button className="delete-btn" onClick={onDelete}>❌</button>
      </div>
    </div>
  );
}

export default Task;
