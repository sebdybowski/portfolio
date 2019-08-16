import React from 'react';
import logo from './logo.svg';
import { Button } from "./components/buttons/Button";
import { Navbar } from "./components/navbar/Navbar";
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';

const App: React.FC = () => {
  return (
    <div className="App">
      <Navbar/>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <div className="row">
          <div className="col">
            <Button inner="Portfolio" flavour="btn-primary" onClick={() => console.log('ddd')} />
          </div>
          <div className="col">
            <Button inner="Contact Me" flavour="btn-outline-secondary" onClick={() => console.log('ddd')} />
          </div>
        </div>
      </header>
    </div>
  );
};

export default App;
