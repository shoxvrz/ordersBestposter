import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../toolkit/store'; // Import AppDispatch type
import { getOrderById } from '../../toolkit/features/orderSlice';
import './SearchBar.scss';

const SearchBar: React.FC = () => {
  const [input, setInput] = useState<string>('');
  const dispatch = useDispatch<AppDispatch>(); // Type the dispatch function

  const inputHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInput(event.target.value);
  };

  const searchHandler = () => {
    if (input.trim()) {
      dispatch(getOrderById(input)); // No TypeScript error expected here
    }
  };

  return (
    <div className="searchBar">
      <input
        type="text"
        placeholder="Buyurtma id raqamini kiriting..."
        value={input}
        onChange={inputHandler}
      />
      <button onClick={searchHandler}>Qidirish</button>
    </div>
  );
};

export default SearchBar;
