import {Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home';
import UserList from './Pages/UserList';
import AlbumList from './Pages/AlbumList';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/users" element={<UserList/>} />
        <Route path="albums" element={<AlbumList />} />
      </Routes>
    </div>
  );
}

export default App;
