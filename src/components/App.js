import React from 'react';
import Home from "./home/Home";

import { Switch, Route } from "react-router-dom";

function App() {
  return (
    <div style={{ margin: "15px" }}>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/:index" component={Home} />
      </Switch>
    </div>
  );
}

export default App;
