import React, { PureComponent } from 'react';

class HabitAddForm extends PureComponent {
  inputRef = React.createRef();

  onSubmit = (e) => {
    e.preventDefault();
    const name = this.inputRef.current.value;
    name && this.props.onAdd(name);
    this.inputRef.current.value = '';
  };
  handleAdd = (name) => {
    this.props.onAdd(name);
  };
  render() {
    console.log('habitAddForm');
    return (
      <form className="add_form" onSubmit={this.onSubmit}>
        <input
          ref={this.inputRef}
          type="text"
          className="add_input"
          placeholder="Habit"
        />
        <button className="add_button">Add</button>
      </form>
    );
  }
}

export default HabitAddForm;
