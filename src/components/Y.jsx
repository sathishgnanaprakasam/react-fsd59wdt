import { useName } from "../contexts/NameContext";
import Z from "./Z";

/*
    1. Create a text box that allows users to change their name.
    2. Use an onchange event to update the name in the context.
*/

const Y = () => {

    const { name, setName } = useName();

    const updateName = (e) => {
        setName(e.target.value);
    }

  return (
      <div>
          <Z />
          <input 
              type="text"
              value={name}
              onChange={updateName}
          />
    </div>
  )
}

export default Y;