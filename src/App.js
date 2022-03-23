import "./App.css";
import Login from "./components/login/login";
import Task1 from "./components/navbar/task1";
import Task2 from "./components/navbar/task2";
import Task3 from "./components/navbar/task3";
import Task4 from "./components/navbar/task4";
import Task5 from "./components/navbar/task5";
import Task6 from "./components/navbar/task6";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/task1" element={<Task1 />} />
        <Route path="/task2" element={<Task2 />} />
        <Route path="/task3" element={<Task3 />} />
        <Route path="/task4" element={<Task4 />} />
        <Route path="/task5" element={<Task5 />} />
        <Route path="/task6" element={<Task6 />} />
      </Routes>
    </div>
  );
}

export default App;
