import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Navbar from './components/Navbar'
import Jumbotron from './components/Jumbotron'

class App extends Component {
  state = {
    books: [],
    results: [],
    title: "",
    author: ""
  }

  render() {
    return (
    <div>
        <Navbar />
        <Jumbotron/>
      <div className='container'>
      <h3>Book Search</h3>
      <p></p>
      </div>
    </div>
    );
  }
}

export default App;
