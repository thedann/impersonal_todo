import React from "react";
import { default as Todo, TodoProps } from "./todo";

interface TodoListProps {
  todos: TodoProps[];
}

const TodoList: React.FC<TodoListProps> = (props: TodoListProps) => {
  return (
    <ul className="todo-list">
      {props.todos.map(todo => {
        return <Todo id={todo.id} description={todo.description} />;
      })}
    </ul>
  );
};

export default TodoList;
