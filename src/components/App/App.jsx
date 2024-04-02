import { useState, useEffect } from "react";

export default function App() {
  const [cliks, setcliks] = useState(() => {
    const savedClicks = window.localStorage.getItem("saved-cliks");
    if (savedClicks !== null) {
      return parseInt(savedClicks);
    }
    return 0;
  });

  const handleClickAdd = () => {
    setcliks(cliks + 1);
  };
  const handleClickReset = () => {
    setcliks(0);
  };

  useEffect(() => {
    window.localStorage.setItem("saved-cliks", cliks);
  }, [cliks]);
  return (
    <>
      <button onClick={handleClickAdd}>Add: {cliks}</button>
      <button onClick={handleClickReset}>Reset</button>
    </>
  );
}
