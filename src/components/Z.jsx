import { useName } from "../contexts/NameContext";

const Z = () => {

    const { name, setName } = useName();

  return (
      <div>
            <h1>Hello, { name }!</h1>
    </div>
  )
}

export default Z;