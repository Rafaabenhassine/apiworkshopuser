import {Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home';
import UserList from './Pages/UserList';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/users" element={<UserList/>} />
      </Routes>
    </div>
  );
}

export default App;
