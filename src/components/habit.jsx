import React, { Component } from 'react';

class Habit extends Component {
    state = {
        count: 0,
    };
    handleIncrement = () => {
        //state를 업데이트할 때는 setState를 반드시 해줘야 state가 변경되었는지 아닌지 확인 가능하다.
        this.setState({count: this.state.count + 1});
    }
    handleDecrement = () => {
        //state를 업데이트할 때는 setState를 반드시 해줘야 state가 변경되었는지 아닌지 확인 가능하다.
        const count = this.state.count - 1;
        this.setState({count: count < 0 ? 0 : count});
    }
    render() {
        console.log(this.props.habit);
        const { name, count } = this.props.habit;
        return (
            <>
                <li className='habit'>
                    <span className='habit_name'>{name}</span>
                    <span className='habit_count'>{count}</span>
                    <button className="habit_btn habit_increase" onClick={this.handleIncrement}>
                        <i className="fa-solid fa-square-plus"></i>
                    </button>
                    <button className="habit_btn habit_decrease" onClick={this.handleDecrement}>
                        <i className="fa-solid fa-square-minus"></i>
                    </button>
                    <button className="habit_btn habit_delete">
                        <i className="fa-solid fa-trash"></i>
                    </button>
                </li>
            </>
        );
    }
}

export default Habit;       