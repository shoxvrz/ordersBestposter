import React, { useState } from "react";
import "./SearchBar.scss";

const SearchBar = () => {
  const [input, setInput] = useState<string>('');

  // Change the event type to React.ChangeEvent<HTMLInputElement>
  const inputHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInput(event.target.value); // Use event.target.value to get the input value
  };

  console.log(input);
  
  return (
    <div className="searchBar"> 
      <input
        type="text"
        placeholder="Buyurtma id raqamini kiriting..."
        value={input}
        onChange={inputHandler} // Attach the event handler to the input
      />
      <button>Qidirish</button>
    </div>
  );
};

export default SearchBar;
