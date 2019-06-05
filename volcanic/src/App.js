import React, { Component } from 'react';
import logo from './logo.svg';
import './App.scss';
import Home from './pages/Home'


export default class App extends Component {
  render(){
    return (
      <div className="App">
        <Home/>
      </div>
    );
  }
}

