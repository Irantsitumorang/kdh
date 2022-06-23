import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './parts/Navbar';
import Login from './pages/Login';
import Register from './pages/Register';
import Homepage from './pages/Homepage';


function App() {
  return (
    
      <Router>
      <div className="App">
          <Navbar />
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
        <Homepage/>
      </div>
      </Router>
  );
}

export default App;
