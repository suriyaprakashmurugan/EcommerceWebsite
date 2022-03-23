import './App.css';
import Login from './components/login/login'; 
import Task from './components/login/task';
import {Routes, Route} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Routes> 
      <Route path='/' element={<Login/>}/>    
      <Route path='/task' element={<Task/>}/>    
      </Routes>
    </div>
  );
}

export default App;
