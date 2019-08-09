import React, { Component } from "react";
import todoLogo from "./img/ToDo.png";
import "./App.css";
import "./animation.css";
import { ITodoProps } from "./components/todo";
import { default as TodoList } from "./components/todoList";

interface AppState {
  todos: ITodoProps[];
  currentInputValue: string;
}

class App extends Component<{}, AppState> {
  constructor(props: AppState) {
    super(props);
    this.state = { todos: [], currentInputValue: "" };
  }

  private handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ currentInputValue: event.target.value });
  };

  private updateTodoListState(todos: ITodoProps[]) {
    this.setState({ todos: todos });
  }

  private addTodo = () => {
    let newTodo: ITodoProps = {
      id: this.state.todos.length,
      onDelete: this.removeTodo,
      description: this.state.currentInputValue
    };
    let todoList: ITodoProps[] = this.state.todos;
    todoList.push(newTodo);
    this.setState({ todos: todoList, currentInputValue: "" });
  };

  private removeTodo = (id: number) => {
    let filteredTodoList = this.state.todos.filter((todo: ITodoProps) => {
      return todo.id !== id;
    });
    this.setState({ todos: filteredTodoList });
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={todoLogo} alt="Todo" className="App-logo" />
          <p>Hi. Welcome to impersonal todo.</p>
        </header>
        <section className="add-todo-section">
          <input
            type="text"
            placeholder="Enter task"
            className="input"
            value={this.state.currentInputValue}
            onChange={this.handleInputChange}
          />
          <button type="button" className="add-button" onClick={this.addTodo}>
            Add task
          </button>
        </section>
        <section className="todo-list-section swing">
          <TodoList
            onDelete={this.removeTodo}
            todos={this.state.todos.length > 0 ? this.state.todos : []}
          />
        </section>
      </div>
    );
  }
}

export default App;
