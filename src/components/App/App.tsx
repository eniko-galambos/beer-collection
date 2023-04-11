import React from 'react';
import { Provider } from 'react-redux';
import { ThemeProvider } from '@mui/material';
import theme from '../../theme';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Login from '../../pages/Login/Login';
import routes from '../../routes';
import store from '../../redux/store/store';
import Preload from '../Preload/Preload';
import List from '../../pages/List/List';
import Header from '../Header/Header';
import ListItem from '../../pages/ListItem/ListItem';

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
                  <>
                    <Header />
                    <Routes>
                      <Route path={routes.list} element={<List />}></Route>
                      <Route
                        path={`${routes.list}/:id`}
                        element={<ListItem />}
                      ></Route>
                      <Route
                        path="*"
                        element={<Navigate to={routes.list} />}
                      ></Route>
                    </Routes>
                  </>
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
