import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';

import {RegistrationComponent} from './registration/registration.component';

@Component({
  selector: 'my-app',
  template: `<router-outlet></router-outlet>`,
  directives: [ROUTER_DIRECTIVES]
})

@RouteConfig([
  {path:'/registration/...', name: 'Registration', component: RegistrationComponent, useAsDefault: true}
])

export class AppComponent { }