import React, { Component } from 'react';
import styles from './app.module.css';
import HabitAddForm from './components/habitAddForm';
import Habits from './components/habits';
import Navbar from './components/navbar';

class App extends Component {
  state = {
    habits: [
      { id: 1, name: 'Reading', count: 0 },
      { id: 2, name: 'Running', count: 0 },
      { id: 3, name: 'Coding', count: 0 },
    ],
  };
  //어떤 습관을 더하고, 삭제하고, 지워야할지에 대해 habit을 인자로 가지고 있어야 함.
  handleIncrement = (habit) => {
    //직접적으로 state를 변경하는 것은 좋지 않다.
    // habit.count++;
    // this.setState(this.state);
    const habits = this.state.habits.map((item) => {
      if (item.id === habit.id) {
        //...habit은 기존의 habit을 동일하게 복사해와서 새로운 object를 만드는 destructing 과정이다.
        return { ...habit, count: habit.count + 1 };
      }
      return item;
    });
    this.setState({ habits: habits });
  };

  handleDecrement = (habit) => {
    const habits = this.state.habits.map((item) => {
      if (item.id === habit.id) {
        const count = habit.count - 1;
        return { ...habit, count: count < 0 ? 0 : count };
      }
      return item;
    });
    this.setState({ habits });
  };

  handleDelete = (habit) => {
    const habits = [...this.state.habits];
    const index = habits.indexOf(habit);
    habits.splice(index, 1);
    this.setState({ habits });
  };

  handleAdd = (name) => {
    const habits = [...this.state.habits, { id: Date.now(), name, count: 0 }];
    this.setState({ habits });
  };

  resetAll = () => {
    const habits = this.state.habits.map((habit) => {
      if (habit.count !== 0) {
        return { ...habit, count: 0 };
      }
      return habit;
    });
    this.setState({ habits });
  };

  render() {
    console.log('app');
    return (
      <>
        <Navbar
          totalCount={this.state.habits.filter((item) => item.count > 0).length}
        />
        <HabitAddForm onAdd={this.handleAdd} />
        <Habits
          habits={this.state.habits}
          onIncrement={this.handleIncrement}
          onDecrement={this.handleDecrement}
          onDelete={this.handleDelete}
        />
        <button className={styles.reset_button} onClick={this.resetAll}>
          Reset All
        </button>
      </>
    );
  }
}

export default App;
