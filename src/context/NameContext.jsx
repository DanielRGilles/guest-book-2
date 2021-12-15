import { useContext, createContext, useState } from "react";

const NameContext = createContext();

const NameProvider = ( { children }) => {
    const [ name, setName ] = useState('')

    return <NameContext.Provider value={{ name, setName }}>{children}</NameContext.Provider>
}

const useName = () => {
    const context = useContext(NameContext)

    if ( context === undefined ) {
        throw new Error('useName must be defined within a NameContext Provider')
    }
    return context
}

export { NameProvider, useName }