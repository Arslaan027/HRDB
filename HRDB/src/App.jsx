import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./Components/Headbar-Sidebar/Header";
import Sidebar from "./Components/Headbar-Sidebar/Sidebar";
import Main from "./Components/Daxbod/Main";
import Content from "./Components/Daxbod/Content";
import Profile from "./Components/Daxbod/Profile/Profile";
import Stats from "./Components/Daxbod/Stats";
import Team from "./Components/Daxbod/Team";
import Event from "./Components/Daxbod/Event";
import { useState } from "react";
import Employee from "./Components/Pages/Employee";
import Payroll from "./Components/Pages/Payroll";

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
    <Router>
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
          <Profile>Employee</Profile>
        </Main>
      </div>
      <Routes>
        <Route path="/employee" element={<Employee />} />
        <Route path="/payroll" element={<Payroll />} />
      </Routes>
    </Router>
  );
}

export default App;
