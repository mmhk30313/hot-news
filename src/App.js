import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Components/Home/Home';
function App() {
  return (
    <div className="bg-dark text-info text-center">
      <h1>Breaking News</h1>
      <Home></Home>
    </div>
  );
}

export default App;
