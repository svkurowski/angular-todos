import {bootstrap, Component, NgFor, NgModel} from 'angular2/angular2';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';
import {TodoList} from './services/todo-list';
import {TodoItem} from './todo-item';

@Component({
  selector: 'todo-list',
  directives: [NgFor, ROUTER_DIRECTIVES],
  template: `
    <div class="mdl-layout mdl-js-layout mdl-layout--fixed-header">
      <header class="mdl-layout__header">
        <div class="mdl-layout__header-row">
          <span class="mdl-layout-title">Todos</span>
        </div>
      </header>
      <main class="mdl-layout__content">
        <div class="page-content">
          <table class="mdl-data-table mdl-js-data-table fullwidth">
            <thead>
              <tr class="fullwidth">
                <th class="mdl-data-table__cell--non-numeric">Completed</th>
                <th class="mdl-data-table__cell--non-numeric">Description</th>
              </tr>
            </thead>
            <tbody>
              <tr *ng-for="#todo of todoList.todos; #i = index" class="fullwidth">
                <td class="mdl-data-table__cell--non-numeric">
                  <input type="checkbox" [(ng-model)]="todo.completed">
                </td>
                <td [router-link]="['/TodoDetail', {id: i}]" class="mdl-data-table__cell--non-numeric">{{ todo.description }}</td>
                <td>
                  <button (click)="deleteTodo(todo, i)" class="mdl-button mdl-js-button mdl-button--colored">
                    <i class="material-icons">delete</i>
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </main>
    </div>
  <h1>Todos</h1>
  `,
   styles: [
     '.fullwidth { width: 100%; }'
  ]
})
export class TodoListComponent {
  constructor(public todoList: TodoList) {}
  deleteTodo(todo: TodoItem, index: number) {
    this.todoList.todos.splice(index, 1);
  }
}
