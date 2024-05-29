import { useParams } from "react-router-dom";

const Note = () => {

    const { id } = useParams();

  return (
      <div>Note {id}</div>
  )
}

export default Note;