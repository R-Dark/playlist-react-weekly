import React, { Component } from 'react';
import logo from '../logo.svg';
import '../styles/App.css';
import NavBar from './NavBar.js'
import PlayListForm from "./PlayListForm.js"
import PlayList from "./PlayList.js"

class App extends Component {
  render() {
    return (
      <div className="App">
        <div>
            <NavBar />
        </div>
        <div className="mainContent">
          <div className="playListForm">
            <PlayListForm />
          </div>
          <div className="playList">
            <PlayList />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
