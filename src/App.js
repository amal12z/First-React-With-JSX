import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import hi from './hi.png';

class App extends Component {
  render() {
    return (
      <div className="App">
        <section>
          <div className="container mt-5 bg-dark text-light p-5 rounded">
            <h1 className="text-warning">Hello Dojo!</h1>
            <h5 className="text-info mt-5 mb-5">Things  I need To Do : </h5>
            <ul className="list-group">
              <li className="list-group-item ">Learn React</li>
              <li className="list-group-item list-group-item-light">Climb Mt. Everest</li>
              <li className="list-group-item list-group-item-secondary">Run a marathon</li>
              <li className="list-group-item list-group-item-dark">Feed the Dogs</li>
            </ul>
          </div>
        </section>
      </div>
    );
  }
}

export default App;
