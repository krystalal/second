import './App.css';
import { Button } from 'antd';
import React from 'react';
import {Outlet} from 'react-router-dom'
function App() {
  return (
    <div className="App">
      <Button type="primary">Button</Button>
      <Outlet />
    </div>
  );
}

export default App;
