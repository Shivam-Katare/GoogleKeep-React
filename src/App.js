import './App.css';
import Footer from './components/Footer';
import Header from './components/Header'
import Note from './components/Note';
import CreateArea from './components/CreateArea';
import React, { useEffect, useState } from "react"


//Get the Locaal Storage

const getLocalItems = () => {
  let lists = localStorage.getItem('list');
  console.log('list');
  if (lists) {
    return JSON.parse(localStorage.getItem("list"));
  } else {
    return [];
  }
}


function App() {
  const [notes, setNotes] = useState(getLocalItems); //notes array

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

  //add data to local storage
  useEffect(() => {
    localStorage.setItem('list',JSON.stringify(notes))
  }, [notes] )

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
      <Footer />
    </>
  );
}

export default App;