import React, { ReactElement } from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Board } from './pages/Board/Board';
import Home from './pages/Home/Home';

function App(): ReactElement {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/board">
            <Board />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
