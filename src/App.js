import './App.css';
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './components/Home';
import { Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register';
import Dashboard from './components/Dashboard'

function App() {

  return (
    <div className="">
      <Routes>
          <Route path="/" element={<Home />} exact />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />    
          <Route path="/dash" element={<Dashboard />} /> 
      </Routes>
    </div>
  );
}

export default App;
