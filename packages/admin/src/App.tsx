import React from 'react';
import './App.css';
import { ThemeProvider, StylesProvider } from '@material-ui/core/styles';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Login from './pages/Login';
import ReduxPage from './pages/ReduxPage';
import PrivateRoute from './components/PrivateRoute';
import theme from './themes';

function App() {
  return (
    <div className="App">
      <StylesProvider injectFirst>
        <ThemeProvider theme={theme}>
          <BrowserRouter>
            <Switch>
              <Route path="/login" component={Login} />
              <Route path="/redux-example" component={ReduxPage} />
              <PrivateRoute path="/protected" component={ReduxPage} />
            </Switch>
          </BrowserRouter>
        </ThemeProvider>
      </StylesProvider>
    </div>
  );
}

export default App;
