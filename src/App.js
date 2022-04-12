import './App.css';
import Footer from './components/Footer';
import Header from './components/Header'
import Note from './components/Note';
import CreateArea from './components/CreateArea';
import React, { useState } from "react"


function App() {
  const [notes, setNotes] = useState([]); //notes array

  function addNote(newNote) {
    setNotes((prevNotes) => {
      return [...prevNotes, newNote];
    });
  }

  function deleteNote(id) {
    setNotes(prevNotes => {
    return prevNotes.filter((noteItem, index) => {
        return index !== id;
      })
    })
  }

  return (
    <>
      <Header />
      <CreateArea onAdd={addNote} />
      {notes.map((noteItem, index) => {
        return <Note
          key={index}
          id = { index }
          title={noteItem.title}
          content={noteItem.content}
          onDelete={deleteNote}
        />
      })}
      {/* <Note key={1} title="Note title" content="Note content" /> */}
      <Footer />
    </>
  );
}

export default App;
