import Custombutton from "./CustomButton";
import { useState } from "react";

export default function App() {
  const [clicks, setClicks] = useState(0);

  const handleClick = () => {
    setClicks(clicks + 1);
  };

  return (
    <>
      <Custombutton value={clicks} onUpdate={handleClick} />
      <Custombutton value={clicks} onUpdate={handleClick} />
    </>
  );
}
