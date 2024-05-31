import { useState } from "react"

const D = ({ name }) => {
    return <h1>Hello, { name }!</h1>
}

const C = ({ name }) => {
    return <D 
        name={name}
    />
}

const B = ({ name }) => {
    return <C 
        name={name}
    />
}

const App = () => {

    const [name, setName] = useState('John');    
    return <B 
        name={name}
    />
}

export default App;