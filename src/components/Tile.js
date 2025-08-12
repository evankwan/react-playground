import { useCurrentUserProvider } from "../contexts/CurrentUserProvider"

function Tile() {
    const { currentUser } = useCurrentUserProvider()
    return (
        <h1>{currentUser}</h1>
    )
}

export default Tile