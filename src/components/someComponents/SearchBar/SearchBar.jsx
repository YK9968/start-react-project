import { useState } from "react";
import css from "./SearchBar.module.css";
export default function SearchBar() {
  const [inputValue, setInputValue] = useState("");

  const handleChange = (evt) => {
    setInputValue(evt.target.value);
  };

  return (
    <div>
      <input
        className={css.input}
        type="text"
        value={inputValue}
        onChange={handleChange}
      />
      <p className={css.text}>{inputValue}</p>
    </div>
  );
}
