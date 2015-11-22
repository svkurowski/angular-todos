import {bootstrap, provide, Component} from 'angular2/angular2';
import {RouteConfig, Route, Redirect, ROUTER_DIRECTIVES, ROUTER_PROVIDERS, LocationStrategy, HashLocationStrategy} from 'angular2/router';
import {HTTP_PROVIDERS} from 'angular2/http';
import {TodoList} from './services/todo-list';
import {TodoListComponent} from './todo-list-component';
import {TodoDetailComponent} from './todo-detail-component';

@Component({
  selector: 'app',
  directives: [ ROUTER_DIRECTIVES ],
  template: '<router-outlet></router-outlet>'
})
@RouteConfig([
  new Redirect({ path: '/', redirectTo: '/todos' }),
  new Route({ path: '/todos', component: TodoListComponent, name: 'TodoList' }),
  new Route({ path: '/todos/:id', component: TodoDetailComponent, name: 'TodoDetail' })
])
class AppComponent { }

bootstrap(AppComponent, [
  TodoList,
  HTTP_PROVIDERS,
  ROUTER_PROVIDERS,
  provide(LocationStrategy, {useClass: HashLocationStrategy})
]);
