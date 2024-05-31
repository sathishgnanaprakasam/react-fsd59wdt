import { useContext, useEffect } from "react";
import { NameContext } from "../App";

const D = () => {

    // 3. Use the context in the component
    const { name, setName } = useContext(NameContext);

    useEffect(() => {
        setTimeout(() => {
            setName('Jane');
        }, 5000);
    })

    return <h1>Hello, { name }!</h1>
}

export default D;