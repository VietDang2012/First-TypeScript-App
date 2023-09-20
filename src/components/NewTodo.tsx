import React, { useRef } from 'react';

import classes from './NewTodo.module.css'
import { TodosContext } from '../store/todos-context';

const NewTodo: React.FC = (props) => {
    const todosCtx = React.useContext(TodosContext);

    const todoTextInputRef = useRef<HTMLInputElement>(null);

    const submitHandler = (event: React.FormEvent) => {
        event.preventDefault();

        const enteredValue = todoTextInputRef.current!.value;

        if (enteredValue.trim().length === 0) {
            // error
            return;
        }

        todosCtx.addTodo(enteredValue);
        todoTextInputRef.current!.value = "";
    }

    return (
        <form className={classes.form} onSubmit={submitHandler}>
            <label htmlFor='text'>What need to do</label>
            <input ref={todoTextInputRef} type='text' id='text' placeholder='Enter something' />
            <button>Add Todo</button>
        </form>
    );
};

export default NewTodo;