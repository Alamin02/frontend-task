import React from 'react';
import './App.css';
import Home from "./components/Home";

import { Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/:index" component={Home} />
      </Switch>
    </div>
  );
}

export default App;
