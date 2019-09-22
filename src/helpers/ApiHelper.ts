import Todo, { ITodoProps } from "../components/todo";
import { ok } from "assert";

export default class ApiHelper {
  static get(): Promise<string[]> {
    var url = "http://localhost:5000/api/todo";
    return fetch(url).then(response => {
      if (!response.ok) {
        //throw new Error(response.statusText);
      }
      return response.json();
    });
  }

  static post(todo: ITodoProps) {
    var url = "http://localhost:5000/api/todo";
    var data = new FormData();
    data.append("todo", todo.description);

    return fetch(url, {
      headers: {
        Accept: "application/json"
      },
      method: "POST",
      body: data
    }).then(response => {
      if (!response.ok) {
        //handle error here
      }
      return todo;
    });
  }

  static delete(id: number) {
    var url = "http://localhost:5000/api/todo";
    var data = new FormData();
    data.append("id", id.toString());
    return fetch(url, {
      headers: {
        Accept: "application/json"
      },
      method: "DELETE",
      body: data
    }).then(response => {
      return ok;
    });
  }
}
