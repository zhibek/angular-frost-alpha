import {Component} from 'angular2/core';
import {Router} from 'angular2/router'
import {NgForm} from 'angular2/common';

import {RegistrationService} from './registration.service';
import {ProgressBarComponent} from './progress-bar.component';

@Component({
  selector: 'giving-page',
  templateUrl: 'app/registration/giving-page.component.html',
  directives: [ProgressBarComponent]
})

export class GivingPageComponent {

  _router: Router;
  _service: RegistrationService;

  constructor(_router: Router, _service: RegistrationService) {
    this._router = _router;
    this._service = _service;
  }

  onSubmit() {
    this._router.navigate(['/Registration']);
  }

}