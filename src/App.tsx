import React, { Component } from "react";
import todoLogo from "./img/ToDo.png";
import "./App.css";
import "./animation.css";
import { ITodoProps } from "./components/todo";
import { default as TodoList } from "./components/todoList";
import ApiHelper from "./helpers/ApiHelper";

interface AppState {
  todos: ITodoProps[];
  currentInputValue: string;
}

class App extends Component<{}, AppState> {
  constructor(props: AppState) {
    super(props);
    var tempTodos: Array<ITodoProps> = [];

    this.state = { todos: [], currentInputValue: "" };

    ApiHelper.get().then(response => {
      response.forEach((item, index) => {
        let newTodo: ITodoProps = {
          id: index,
          onDelete: this.removeTodo,
          description: item,
          isChecked: false
        };
        tempTodos.push(newTodo);
      });
      this.setState({ todos: tempTodos });
    });
  }

  private handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ currentInputValue: event.target.value });
  };

  private keyDownAddTodo = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.keyCode === 13) {
      this.addTodo();
    }
  };

  private addTodo = () => {
    let newTodo: ITodoProps = {
      id: this.state.todos.length,
      onDelete: this.removeTodo,
      isChecked: false,
      description: this.state.currentInputValue
    };
    let todoList: ITodoProps[] = this.state.todos;

    ApiHelper.post(newTodo).then(() => {
      todoList.push(newTodo);
      this.setState({ todos: todoList, currentInputValue: "" });
    });
  };

  private removeTodo = (id: number) => {
    ApiHelper.delete(id).then(response => {
      if (response) {
        let filteredTodoList = this.state.todos.filter((todo: ITodoProps) => {
          return todo.id !== id;
        });
        this.setState({ todos: filteredTodoList });
      } else {
      }
    });
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
            onKeyDown={this.keyDownAddTodo}
          />
          <button
            type="button"
            className="action-button"
            onClick={this.addTodo}
          >
            Add task
          </button>
        </section>
        <section className="todo-list-section swing">
          <TodoList
            onDelete={this.removeTodo}
            todos={this.state.todos.length > 0 ? this.state.todos : []}
          />
        </section>
        <section className="bottom-section">
          <button type="button" className="action-button action-button--small">
            Share list
          </button>
        </section>
      </div>
    );
  }
}

export default App;
