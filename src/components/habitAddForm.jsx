import React, { memo } from 'react';
import styles from '../app.module.css';

const HabitAddForm = memo((props) => {
  const inputRef = React.createRef();
  //const formRef = React.createRef();

  const onSubmit = (e) => {
    e.preventDefault();
    const name = inputRef.current.value;
    name && props.onAdd(name);
    inputRef.current.value = '';
    //value = "" 대신에
    //formRef.current.reset();으로 적어줘도 됨
  };
  const handleAdd = (name) => {
    props.onAdd(name);
  };

  return (
    //<form ref={formRef}>
    <form className={styles.add_form} onSubmit={onSubmit}>
      <input
        ref={inputRef}
        type="text"
        className={styles.add_input}
        placeholder="Habit"
      />
      <button className={styles.add_button}>Add</button>
    </form>
  );
});

export default HabitAddForm;
