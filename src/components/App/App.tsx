import React from 'react';
import './App.css';
import { ThemeProvider } from '@mui/material';
import theme from '../../theme';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Login from '../../pages/Login/Login';
import routes from '../../routes';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route
            path={routes.login}
            element={<Login />}
          />
          <Route path="*" element={<Navigate to={routes.login} />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
