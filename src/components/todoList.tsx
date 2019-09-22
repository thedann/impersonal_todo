import React from "react";
import { default as Todo, ITodoProps } from "./todo";

interface TodoListProps {
  todos: ITodoProps[];
  onDelete: (id: number) => void;
}

const TodoList: React.FC<TodoListProps> = (props: TodoListProps) => {
  return (
    <ul className="todo-list">
      {props.todos.map(todo => {
        return (
          <Todo
            onDelete={props.onDelete}
            id={todo.id}
            description={todo.description}
            key={todo.id}
            isChecked={false}
          />
        );
      })}
    </ul>
  );
};

export default TodoList;
