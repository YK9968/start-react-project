// import LoginForm from "../LoginForm/LoginForm";
// import MyComponets from "../MyComponents/MyComponents";
import { useState } from "react";
import LangSwitcher from "../LangSwitcher/LangSwitcher";
import RenderFlag from "../RenderFlag/RenderFlag";

// import SearchBar from "../SearchBar/SearchBar";

export default function App() {
  const [lang, setLang] = useState("uk");

  // const handleLogin = (userData) => {
  //   console.log(userData);
  // };

  return (
    <div>
      <p>Selected language: {lang}</p>

      <LangSwitcher value={lang} onSelect={setLang} />
      <RenderFlag langData={lang} />
      {/* <SearchBar /> */}
      {/* <h1>Please login to your account!</h1>
      <LoginForm onLogin={handleLogin} />
      <MyComponets /> */}
    </div>
  );
}
