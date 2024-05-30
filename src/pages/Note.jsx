import { useLoaderData, useParams } from "react-router-dom";

const Note = () => {

  const { id } = useParams();
  const notes = useLoaderData();

  const note = notes.find(note => note.id === parseInt(id));

  return (
    <div>
      <h1>{note.title}</h1>
      <p>{note.content}</p>
      </div>
  )
}

export default Note;