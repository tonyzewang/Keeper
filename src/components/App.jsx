import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import notesData from "../notes";

function App() {
  const [notes, setNotes] = useState(notesData);
  const [newNote, setNewNote] = useState({ title: "", content: "" });

  function updateNewNote(event) {
    const { name, value } = event.target;
    setNewNote((prevNote) => ({
      ...prevNote,
      [name]: value,
    }));
  }

  function addNote() {
    setNotes((prevNotes) => [...prevNotes, newNote]);
    setNewNote({ title: "", content: "" });
  }

  function deleteNote(index) {
    setNotes((prevNotes) => {
      const updatedNotes = [...prevNotes];
      updatedNotes.splice(index, 1);
      return updatedNotes;
    });
  }

  return (
    <div>
      <Header />
      <div className="questionbox">
        <form>
          <input
            name="title"
            onChange={updateNewNote}
            value={newNote.title}
            type="text"
            placeholder="Title"
            id="title"
          />
          <input
            name="content"
            onChange={updateNewNote}
            value={newNote.content}
            type="text"
            placeholder="Take a note..."
            id="content"
          />
          <button className="add" type="button" onClick={addNote}>
            Add
          </button>
        </form>
      </div>
      {notes.map((note, index) => (
        <Note
          key={index}
          title={note.title}
          content={note.content}
          onDelete={() => deleteNote(index)}
        />
      ))}
      <Footer />
    </div>
  );
}

export default App;
