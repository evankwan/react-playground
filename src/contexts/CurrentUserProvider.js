import { createContext, useState, useContext } from "react"

const CurrentUserContext = createContext(null)

function CurrentUserProvider({ children }) {
    const [currentUser, setCurrentUser] = useState(null)
    return (
        <CurrentUserContext.Provider value={{ currentUser, setCurrentUser }}>
            {children}
        </CurrentUserContext.Provider>
    )
}

export default CurrentUserProvider

export const useCurrentUserProvider = () => useContext(CurrentUserContext)