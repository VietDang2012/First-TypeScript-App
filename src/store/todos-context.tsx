import * as React from 'react';
import Todo from "../models/todo"
import { useState } from 'react';

type TodosObjContext = {
    items: Todo[],
    addTodo: (text: string) => void,
    removeTodo:(id:string) =>void
}

export const TodosContext = React.createContext<TodosObjContext>({
    items: [],
    addTodo: () => { },
    removeTodo: (id:string) => {}
})

const TodosContextProvider: React.FC<{ children: any }> = (props) => {
    const [todos, setTodos] = useState<Todo[]>([]);

  const addTodoHandler = (todoText: string) => {
    const newTodo = new Todo(todoText);
    setTodos((prevTodos) => {
      return prevTodos.concat(newTodo);
    })
  }

  const removeTodoHandler = (todoId: string) => {
    setTodos((prevTodos) => {
      return prevTodos.filter((todo) => {
        return todo.id !== todoId;
      })
    })
    }
    
    const contextValue: TodosObjContext = {
        items: todos,
        addTodo: addTodoHandler,
        removeTodo: removeTodoHandler,
    }

    return <TodosContext.Provider value={contextValue}>
        {props.children}
    </TodosContext.Provider>
}

export default TodosContextProvider