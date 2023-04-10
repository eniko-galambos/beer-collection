import React from 'react';
import { Provider } from 'react-redux';
import './App.css';
import { ThemeProvider } from '@mui/material';
import theme from '../../theme';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Login from '../../pages/Login/Login';
import routes from '../../routes';
import store from '../../redux/store/store';
import Preload from '../Preload/Preload';
import List from '../../pages/List/List';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <BrowserRouter>
          <Routes>
            <Route path={routes.login} element={<Login />} />
            <Route
              path="*"
              element={
                <Preload>
                  <Routes>
                    <Route path={routes.list} element={<List />}></Route>
                    <Route
                      path="*"
                      element={<Navigate to={routes.list} />}
                    ></Route>
                  </Routes>
                </Preload>
              }
            />
          </Routes>
        </BrowserRouter>
      </Provider>
    </ThemeProvider>
  );
}

export default App;
