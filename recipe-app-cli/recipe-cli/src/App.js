import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import HeaderComponent from './components/HeaderComponent';
import Routes from './Routes/Routes';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <HeaderComponent />
        <Routes />
      </BrowserRouter>
    </div>
  );
}

export default App;
