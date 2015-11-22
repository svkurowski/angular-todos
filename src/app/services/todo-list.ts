import {Injectable} from 'angular2/angular2';
import {Http, Response} from 'angular2/http';
import {TodoItem} from '../todo-item';

@Injectable()
export class TodoList {
  todos: TodoItem[] = [];

  constructor(public http: Http) {
    this.todos.push(new TodoItem("Write a todo list",true))
    this.http.get('./app/todos.json')
    .map((res:Response) => JSON.parse(res.text()))
    .subscribe(res => this.todos = this.todos.concat(res));
  }
}
