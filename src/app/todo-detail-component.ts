import {bootstrap, Component, NgFor} from 'angular2/angular2';
import {RouteParams, ROUTER_DIRECTIVES} from 'angular2/router';
//import {RouteConfig, Route, Redirect, , ROUTER_PROVIDERS, LocationStrategy, HashLocationStrategy} from 'angular2/router';

import {TodoList} from './services/todo-list';
import {TodoItem} from './todo-item';

@Component({
  selector: 'todo-detail',
  directives: [ROUTER_DIRECTIVES],
  template: `
  <div class="mdl-layout mdl-js-layout mdl-layout--fixed-header">
    <header class="mdl-layout__header">
      <div class="mdl-layout__header-row">
        <nav class="mdl-navigation mdl-layout--large-screen-only">
          <button [router-link]="['/TodoList']" class="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect">
            <i class="material-icons">list</i>
          </button>
          <a class="mdl-navigation__link" [router-link]="['/TodoList']">
            <span class="icon icon-ic_play-circle_outline_black_24dp"></span>
          </a>
        </nav>
        <span class="mdl-layout-title">Todos</span>
      </div>
    </header>
    <main class="mdl-layout__content">
      <div class="page-content">
        <div class="todo-card mdl-card mdl-shadow--2dp">
          <div class="mdl-card__supporting-text">
            <label>Completed: <input type="checkbox" [(ng-model)]="todo.completed"></label>
            <div class="mdl-textfield mdl-js-textfield">
              <input class="mdl-textfield__input" type="text" id="description" [(ng-model)]="todo.description">
            </div>
          </div>
        </div>
      </div>
    </main>
  </div>
  `,
  styles: [
    '.todo-card { margin: 0 auto; margin-top: 20px; }'
  ]
})
export class TodoDetailComponent {
  todo: TodoItem;
  constructor(public todoList: TodoList, params: RouteParams) {
    this.todo = todoList.todos[parseInt(params.get('id'))];
  }
}
