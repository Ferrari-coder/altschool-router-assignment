import React, { Component } from "react";

import NavBar from "./components/navbar";
import ErrorBoundary from "./components/ErrorBoundary";


class App extends Component {
  render() {
    return (
      <div className="App">
        <ErrorBoundary>
          <NavBar />
        </ErrorBoundary>
       
      </div>
    );
  }
}

export default App;
