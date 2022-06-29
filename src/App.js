import React from 'react';
import { Route, Switch } from 'react-router';
import './App.css';
import Calculator from './pages/Calculator';
import Home from './pages/Home';
import NavBar from './components/NavBar';
import Quotes from './pages/Quotes';

class App extends React.Component {
  render() {
    return (
      <>
        <NavBar />
        <Switch>
          <Route path="/calculator">
            <div className="App">
              <Calculator />
            </div>
          </Route>
          <Route path="/quotes">
            <Quotes />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </>
    );
  }
}

export default App;
