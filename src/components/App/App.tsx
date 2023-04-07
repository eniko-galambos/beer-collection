import React from 'react';
import logo from '../../logo.svg';
import './App.css';
import { Typography } from '@mui/material';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Typography sx={{color: theme => theme.palette.primary.main}}>
          Beer finder
        </Typography>
      </header>
    </div>
  );
}

export default App;
