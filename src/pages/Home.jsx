import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import noteServices from "../services/noteServices";

const Home = () => {

  const [notes, setNotes] = useState([]);

  useEffect(() => {
    noteServices.getNotes()
      .then(notes => setNotes(notes));
  }, []);

  console.log(notes);

  return (
    <div>
      <h1>Notes</h1>
      <ul>
        {notes.map(note => (
          <li key={note.id}>
            <Link to={`/notes/${note.id}`}>{note.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Home;