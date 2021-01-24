import React, { useState } from "react";

function App() {
  const [input, setInput] = useState("");
  const [items, setItems] = useState([]);

  const changeInputValue = (event) => {
    const newValue = event.target.value;
    setInput(newValue);    
  };

  const addItem = () => {
    setItems((prevItems) => {
      return [...prevItems, input];
    })

    setInput("");
  };

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input
          type="text"
          value={input}
          onChange={changeInputValue}  
        />
        <button
          onClick={addItem}
        >
          <span>Add</span>
        </button>

      </div>
      <div>
        <ul>
          {items.map(item => <li>{item}</li>)}
        </ul>
      </div>
    </div>
  );
}

export default App;
