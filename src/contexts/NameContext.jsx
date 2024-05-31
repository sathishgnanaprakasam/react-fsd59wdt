import { createContext, useContext, useState } from "react";

// 1. Create a Context
const NameContext = createContext();

// 2. Create a Provider
export const NameProvider = ({ children }) => {
    const [name, setName] = useState('John');   
    
    return (
        <NameContext.Provider value={{name, setName}}>
            {children}
        </NameContext.Provider>
    )
}

export const useName = () => useContext(NameContext);