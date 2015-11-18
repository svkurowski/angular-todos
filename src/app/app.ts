import {bootstrap, Component, NgFor} from 'angular2/angular2';
import {TodoItem} from './todo-item';

@Component({
    selector: 'app',
    directives: [NgFor],
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
              <tr *ng-for="#todo of todos" class="fullwidth">
                <td class="mdl-data-table__cell--non-numeric">
                  <input type="checkbox" [checked]="todo.completed" disabled>
                </td>
                <td class="mdl-data-table__cell--non-numeric">{{ todo.description }}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </main>
    </div>
    `,
    styles: [
      '.fullwidth { width: 100%; }'
    ]
})
class AppComponent {
  todos: TodoItem[] = [
    new TodoItem("Grocery shopping"),
    new TodoItem("Make a fruit salad"),
    new TodoItem("Get money")
  ]
}

bootstrap(AppComponent);
