import React, { Component } from "react";
import NavBar from "./components/navbar";
import ErrorBoundary from "./components/ErrorBoundary";
import Error from "./components/error";

class App extends Component {
 
  render(){
  return (
    <div className="App">
      <ErrorBoundary>
        <NavBar />
      </ErrorBoundary>
      <ErrorBoundary>

      <Error/>
      </ErrorBoundary>
    </div>




  )}
}

export default App;
