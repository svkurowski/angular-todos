import {Component} from 'angular2/angular2';
import {TodoList} from './services/todo-list';
import {TodoItem} from './todo-item';

@Component({
  selector: 'todo-form',
  directives: [],
  template: `
  <form (ng-submit)="onSubmit()">
    <div class="mdl-textfield mdl-js-textfield">
      <input class="mdl-textfield__input" type="text" id="input" [(ng-model)]="input">
    </div>
    <input type="submit" value="Add" class="mdl-button mdl-js-button mdl-button--colored">
  </form>
  `,
  styles: [
    'form {margin-left: 5ex;}'
  ]
})
export class TodoFormComponent {
  input: string;
  constructor(public todoList: TodoList) {}
  onSubmit() {
    if(this.input !== '') {
      this.todoList.todos.push(new TodoItem(this.input));
      this.input = "";
    }
  }
}
