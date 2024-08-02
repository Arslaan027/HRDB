import { useState } from "react";
import Header from "./Components/Header";
import Sidebar from "./Components/Sidebar";
import Main from "./Components/Main";
import Content from "./Components/Content";
import Employee from "./Components/Employee";
import Stats from "./Components/Stats";
import Team from "./Components/Team";
import Event from "./Components/Event";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
  return (
    <>
      <div className={`${darkMode && "dark"} font-quickSand`}>
        <Header
          toggleDarkMode={toggleDarkMode}
          darkMode={darkMode}
          toggleSidebar={toggleSidebar}
        />
        <Sidebar isSidebarOpen={isSidebarOpen} />
        <Main>
          <Content>
            <Stats darkMode={darkMode} />
            <div className="flex flex-col gap-3 lg:flex-row">
              <Team />
              <Event />
            </div>
          </Content>
          <Employee>Employee</Employee>
        </Main>
      </div>
    </>
  );
}

export default App;
