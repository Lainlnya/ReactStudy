import React, { PureComponent } from 'react';
import styles from '../app.module.css';

class Habit extends PureComponent {
  componentDidMount() {
    console.log(`habit : ${this.props.habit.name} DidMount`);
  }
  componentWillUnmount() {
    console.log(`habit : ${this.props.habit.name} UnMount`);
  }
  handleIncrement = () => {
    this.props.onIncrement(this.props.habit);
    //state를 업데이트할 때는 setState를 반드시 해줘야 state가 변경되었는지 아닌지 확인 가능하다.
    // this.setState({count: this.state.count + 1});
  };
  handleDecrement = () => {
    this.props.onDecrement(this.props.habit);
    //state를 업데이트할 때는 setState를 반드시 해줘야 state가 변경되었는지 아닌지 확인 가능하다.
    // const count = this.state.count - 1;
    // this.setState({count: count < 0 ? 0 : count});
  };
  handleDelete = () => {
    this.props.onDelete(this.props.habit);
  };
  render() {
    console.log('habit');
    const { name, count } = this.props.habit;
    return (
      <>
        <li className={styles.habit}>
          <span className={styles.habit_name}>{name}</span>
          <span className={styles.habit_count}>{count}</span>
          <button
            className={`${styles.habit_btn} 
            ${styles.habit_increase}`}
            onClick={this.handleIncrement}
          >
            <i className="fa-solid fa-square-plus"></i>
          </button>
          <button
            className={`${styles.habit_btn} 
            ${styles.habit_decrease}`}
            onClick={this.handleDecrement}
          >
            <i className="fa-solid fa-square-minus"></i>
          </button>
          <button
            className={`${styles.habit_btn} 
            ${styles.habit_delete}`}
            onClick={this.handleDelete}
          >
            <i className="fa-solid fa-trash"></i>
          </button>
        </li>
      </>
    );
  }
}

export default Habit;
