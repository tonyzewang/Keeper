import React from "react";

function Note({ title, content, onDelete }) {
  return (
    <div className="note">
      <h1 className="note-title">{title}</h1>
      <p className="note-content">{content}</p>
      <button onClick={onDelete} className="delete">
        Delete
      </button>
    </div>
  );
}

export default Note;
