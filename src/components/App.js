import {React, useState} from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";

function App() {
  const [darkModeOn, setDarkModeOn] = useState(false)

  const handleClick = () => {
    setDarkModeOn(currentValue => !currentValue)
  }

  const appClass = darkModeOn ? "App dark" : "App light"

  return (
    <div className={appClass}>
      <header>
        <h2>Shopster</h2>
        <button onClick={handleClick}>{darkModeOn ? 'Light' : 'Dark'} Mode</button>
      </header>
      <ShoppingList items={itemData} />
    </div>
  );
}

export default App;
