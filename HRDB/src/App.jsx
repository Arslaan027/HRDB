import { useState } from "react";
import Header from "./Components/Header";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };
  return (
    <>
      <div className={`${darkMode && "dark"} font-quickSand`}>
        <Header toggleDarkMode={toggleDarkMode} darkMode={darkMode} />
      </div>
    </>
  );
}

export default App;
