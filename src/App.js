import Button from "./components/Button"
import Tile from "./components/Tile"
import CurrentUserProvider from "./contexts/CurrentUserProvider"

import "./App.css"

function App() {

  return (
    <div className="App">
      <CurrentUserProvider>
        <Button />
        <Tile />
      </CurrentUserProvider>
    </div>
  );
}

export default App;
