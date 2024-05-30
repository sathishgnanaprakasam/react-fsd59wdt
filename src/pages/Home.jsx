import { useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import noteServices from "../services/noteServices";

export const loader = async () => {
  const notes = await noteServices.getNotes();
  return notes;
}

const Home = () => {

  const notes = useLoaderData();

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