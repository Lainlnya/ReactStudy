import React, { Component } from 'react';

class Habit extends Component {
  //부모컴포넌트로부터 전달받은 state를 보여주기만 하면 되기 때문에 state가 존재할 필요는 없다.
  // state = {
  //     count: 0,
  // };
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
        <li className="habit">
          <span className="habit_name">{name}</span>
          <span className="habit_count">{count}</span>
          <button
            className="habit_btn habit_increase"
            onClick={this.handleIncrement}
          >
            <i className="fa-solid fa-square-plus"></i>
          </button>
          <button
            className="habit_btn habit_decrease"
            onClick={this.handleDecrement}
          >
            <i className="fa-solid fa-square-minus"></i>
          </button>
          <button
            className="habit_btn habit_delete"
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
