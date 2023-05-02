import React from 'react';
import "../src/App.css"
import Dashboard from './Components/form/Dashboard';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <div >
      <BrowserRouter>
        <Dashboard></Dashboard>
      </BrowserRouter>
    </div>
  );
}

export default App;
