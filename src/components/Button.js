import { useCurrentUserProvider } from "../contexts/CurrentUserProvider"

function Button() {
    const { setCurrentUser } = useCurrentUserProvider()
  
    const handleClick = () => {
      const email = prompt("enter your email")
      setCurrentUser(email)
    }
    return (
        <button onClick={handleClick}>
            Click me
        </button>
    )
}

export default Button