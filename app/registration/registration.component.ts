import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';

import {RegistrationService} from './registration.service';
import {JourneyChoiceComponent} from './journey-choice.component';
import {LoginDetailsComponent} from './login-details.component';
import {ContactDetailsComponent} from './contact-details.component';
import {GivingPageComponent} from './giving-page.component';

@Component({
  templateUrl: 'app/registration/registration.component.html',
  directives: [ROUTER_DIRECTIVES],
  providers: [RegistrationService]
})

@RouteConfig([
  {path:'/', name: 'JourneyChoice', component: JourneyChoiceComponent, useAsDefault: true},
  {path:'/login-details', name: 'LoginDetails', component: LoginDetailsComponent},
  {path:'/contact-details', name: 'ContactDetails', component: ContactDetailsComponent},
  {path:'/giving-page', name: 'GivingPage', component: GivingPageComponent}
])

export class RegistrationComponent { }