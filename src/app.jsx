import React, { Component } from 'react';
import './app.css';
import Habits from './components/habits';

class App extends Component {
  render() {
    return (
      <>
        <nav>
          <i class="fa-solid fa-leaf"></i>
        </nav>
        <Habits />;
      </>
    );
  }
}

export default App;
