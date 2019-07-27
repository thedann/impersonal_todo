import React, { Component } from "react";
import todoLogo from "./img/ToDo.png";
import "./App.css";
import "./animation.css";
import { TodoProps } from "./components/todo";
import { default as TodoList } from "./components/todoList";

interface AppState {
  todos: TodoProps[];
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

  private addTodo = () => {
    let newTodo: TodoProps = {
      id: this.state.todos.length,
      description: this.state.currentInputValue
    };
    let todoList: TodoProps[] = this.state.todos;
    todoList.push(newTodo);
    this.setState({ todos: todoList, currentInputValue: "" });
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
            placeholder="Enter a taks"
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
            todos={this.state.todos.length > 0 ? this.state.todos : []}
          />
        </section>
      </div>
    );
  }
}

export default App;
