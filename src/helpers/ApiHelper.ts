export default class ApiHelper {
  /**
   * name
   */
  static get(): Promise<string[]> {
    var url = "http://localhost:5000/api/todo";
    return fetch(url).then(response => {
      if (!response.ok) {
        //throw new Error(response.statusText);
      }
      return response.json();
    });
  }

  /**
   * name
   */
  static post() {}
}
