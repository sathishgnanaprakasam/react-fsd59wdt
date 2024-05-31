import { useEffect } from "react";
import { useName } from "../contexts/NameContext";

const D = () => {

    // 3. Use the context in the component
    const { name, setName } = useName();

    // useEffect(() => {
    //     setTimeout(() => {
    //         setName('Jane');
    //     }, 5000);
    // })

    return <h1>Hello, { name }!</h1>
}

export default D;