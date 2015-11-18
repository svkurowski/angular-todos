import {bootstrap, Component} from 'angular2/angular2';

@Component({
    selector: 'app',
    directives: [],
    template: `
    <div class="mdl-layout mdl-js-layout mdl-layout--fixed-header">
      <header class="mdl-layout__header">
        <div class="mdl-layout__header-row">
          <span class="mdl-layout-title">Todos</span>
        </div>
      </header>
    </div>
    `
})
class AppComponent {}
bootstrap(AppComponent);
