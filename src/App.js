import React from 'react';
import './App.css';
import getData from "./backend/dummy-server";

import CardList from "./components/CardList";

function App() {
  console.log(getData({ startingIndex: 4 }));
  return (
    <div className="App">
      <CardList />
    </div>
  );
}

export default App;
