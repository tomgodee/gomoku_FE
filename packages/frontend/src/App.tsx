import React from 'react';
import './App.css';
import { ThemeProvider, StylesProvider } from '@material-ui/core/styles';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { LOGIN_PATH } from './config/paths';
import Layout from './pages/Layout';
import Login from './pages/Login';
import PrivateRoute from './components/PrivateRoute';
import theme from './themes';

function App() {
  return (
    <div className="App">
      <StylesProvider injectFirst>
        <ThemeProvider theme={theme}>
          <BrowserRouter>
            <Switch>
              <Route path={LOGIN_PATH} component={Login} />
              <PrivateRoute path="/" component={Layout} />
            </Switch>
          </BrowserRouter>
        </ThemeProvider>
      </StylesProvider>
    </div>
  );
}

export default App;
