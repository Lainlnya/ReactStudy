import React, { PureComponent } from 'react';
import styles from '../app.module.css';

class Navbar extends PureComponent {
  render() {
    console.log('Navbar');
    return (
      <nav>
        <div className={styles.main_icon}>
          <i className="fa-solid fa-leaf"></i>
        </div>
        <span className={styles.habit_tracker}>HabitTracker</span>
        <span className={styles.habit_number}>{this.props.totalCount}</span>
      </nav>
    );
  }
}

export default Navbar;
