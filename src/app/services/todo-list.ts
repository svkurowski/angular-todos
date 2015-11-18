import {Injectable} from 'angular2/angular2';
import {TodoItem} from '../todo-item';

@Injectable()
export class TodoList {
  todos: TodoItem[] = [
    new TodoItem("Grocery shopping"),
    new TodoItem("Make a fruit salad"),
    new TodoItem("Get money")
  ]
}
