import React, { Component } from 'react';
import Habit from './habit';

class Habits extends Component {
  state = {
    //데이터가 수정되어야 하는 장소
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
    const habits = [...this.state.habits];
    const index = habits.indexOf(habit);
    habits[index].count++;
    //이렇게 적어도 가능하다(키와 키 값을 전달하는 용도)
    this.setState({ habits: habits });
  };

  handleDecrement = (habit) => {
    const habits = [...this.state.habits];
    const index = habits.indexOf(habit);
    const count = habits[index].count - 1;
    habits[index].count = count < 0 ? 0 : count;
    this.setState({ habits });
  };

  handleDelete = (habit) => {
    const habits = [...this.state.habits];
    const index = habits.indexOf(habit);
    habits.splice(index, 1);
    this.setState({ habits });
  };

  render() {
    return (
      <ul>
        {this.state.habits.map((habit) => (
          <Habit
            key={habit.id}
            habit={habit}
            onIncrement={this.handleIncrement}
            onDecrement={this.handleDecrement}
            onDelete={this.handleDelete}
          />
        ))}
      </ul>
    );
  }
}

export default Habits;
