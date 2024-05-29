import { useState } from "react";

const Home = () => {

  const [notes, setNotes] = useState([
    {
      id: 1,
      title: "First Note",
      content: "This is the first note"
    },
    {
      id: 2,
      title: "Second Note",
      content: "This is the second note",
    },
  ])

  return (
    <div>
      <h1>Notes</h1>
      <ul>
        {notes.map(note => (
          <li key={note.id}>
            <a href={`/${note.id}`}>{note.title}</a>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Home;