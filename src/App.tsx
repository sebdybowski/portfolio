import React from 'react';
import logo from './logo.svg';
import { Button } from "./components/buttons/Button";
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
          <Button inner="ddd" flavour="btn-primary" onClick={() => console.log('ddd')} />
      </header>
    </div>
  );
};

export default App;
