import React, { Component } from 'react';

class Navbar extends Component {
  render() {
    return (
      <nav>
        <div className="main_icon">
          <i className="fa-solid fa-leaf"></i>
        </div>
        <span className="habit_tracker">HabitTracker</span>
        <span className="habit_number">0</span>
      </nav>
    );
  }
}

export default Navbar;
