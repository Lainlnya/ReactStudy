import React, { PureComponent } from 'react';

class Navbar extends PureComponent {
  render() {
    console.log('Navbar');
    return (
      <nav>
        <div className="main_icon">
          <i className="fa-solid fa-leaf"></i>
        </div>
        <span className="habit_tracker">HabitTracker</span>
        <span className="habit_number">{this.props.totalCount}</span>
      </nav>
    );
  }
}

export default Navbar;
